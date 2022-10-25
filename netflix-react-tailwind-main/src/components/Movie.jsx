import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MdChevronLeft , MdChevronRight} from 'react-icons/md'

import Movie from './Movie'

const Row = ({title, fetchURL ,rowId}) => {
   const [movies ,setMovies] =useState([])


   useEffect(()=>{
    axios.get(fetchURL).then((response) =>{
        setMovies(response.data.results)
    })
   },[fetchURL])
   console.log(movies)

   const  slideLeft = () =>{
    var slider = document.getElementById('slider' +rowId)
    slider.scrollLeft = slider.scrollLeft - 500; 
   }
   const  slideRight = () =>{
    var slider = document.getElementById('slider' +rowId)
    slider.scrollLeft = slider.scrollLeft + 500; 
   }


  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group '>
        <MdChevronLeft className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block '
        size={40} 
        onClick={slideLeft}
        />
        <div id ={'slider' + rowId} className='w-ful h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {
                movies.map((item,id) =>(
                   <Movie item={item} key={id}/>
                        
                ))
            }

        </div>
        <MdChevronRight 
        className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block '
        size={40}
        onClick={slideRight}
        />
        


    </div>
    
    
    </>
  )
}

export default Row