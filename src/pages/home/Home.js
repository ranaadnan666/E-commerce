import { Box } from '@mui/material'
import React from 'react'
import BannerFirst from '../../components/home/banner/BannerFirst'
import BannerSecond from '../../components/home/banner/BannerSecond'
import MainBanner from '../../components/home/banner/MainBanner'
import Blog from '../../components/home/blog/Blog'
import Brand from '../../components/home/brand/Brand'
import Feature from '../../components/home/feature/Feature'
import Popular from '../../components/home/poplar/Popular'
import Shop from '../../components/home/shop/Shop'
import Slider from '../../components/home/slider/Slider'
const  Home = () => {
  return (
    <>
      {/* slider */}
      <Slider />
      {/* brand */}
      <Brand />
      {/* banner */}
      <MainBanner />
      {/* chose to shop */}
      <Shop />
      
      {/* banner */}
      <Box sx={{width:'98%'}} mx={'auto'} mt={5}>
        <BannerSecond />
      </Box>

      {/* feature */}
      <Feature />

      {/* feature */}
      <Popular />

      {/* banner */}
      <Box sx={{ width: '98%' }} mx={'auto'} mt={5}>
        <BannerFirst />
      </Box>

      {/* blog */}
       <Blog/>
      </>
  )
}

export default Home