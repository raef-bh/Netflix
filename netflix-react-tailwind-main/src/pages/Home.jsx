import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main/>
        <Row rowId='1' title='Horro ' fetchURL={requests.requestHorror}  />
        <Row rowId='2' title='Popular ' fetchURL={requests.requestPopular}  />
        <Row rowId='3' title='Top Rated ' fetchURL={requests.requestTopRated}  />
        <Row rowId='4' title='Trending ' fetchURL={requests.requestTrending}  />
        <Row rowId='5' title='Up Coming ' fetchURL={requests.requestUpcoming}  />
    </>
  )
}

export default Home