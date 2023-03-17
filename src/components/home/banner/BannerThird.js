import { Box, Grid } from '@mui/material'
import React from 'react'
import img1 from '../../../images/home/banner3.jpg'
import BannerText from './BannerText'
function BannerThird() {
  return (
    <>
     
       <div style={{ position: "relative" }}>
                <Box>
                    <img src={img1} alt="rooms" style={{ width: '100%', height: '80.5vh' }} />
                </Box>
                <Box>
                    <div style={{
                        position: "absolute",
                        color: "white",
                        bottom: "50%",
                        left: '2%'
                    }}
                    >
                      <BannerText title={"upto 40% off"} text={"Special offers and great deals"} button={"shop now"} />
                    </div>
                </Box>
            </div>
    </>
  )
}

export default BannerThird