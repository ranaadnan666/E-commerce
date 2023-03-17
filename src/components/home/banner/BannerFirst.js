import { Box} from '@mui/material'
import React from 'react'
import img1 from '../../../images/home/banner1.jpg'
import BannerText from './BannerText'
function BannerFirst() {
  return (
    <>

      <div style={{ position: "relative" }}>
        <Box>
          <img src={img1} alt="rooms" style={{ width: '100%', height: '40vh' }} />
        </Box>
        <Box>
          <div style={{
            position: "absolute",
            color: "white",
            top: "30%",
            right: '5%'
          }}
          >
            <BannerText title={"Choose your look"} text={"See our clothing collection"} button={"  See Offers"} />
          </div>
        </Box>
      </div>
    </>
  )
}

export default BannerFirst