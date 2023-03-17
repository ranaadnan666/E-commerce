import { Box, Button, Typography} from '@mui/material'
import React from 'react'
import img1 from '../../../images/home/banner2.jpg'
import BannerText from './BannerText'
function BannerSecond() {
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
                        left:'2%'
                    }}
                    >
                 <BannerText title={"Brand new style"} text={"Popular clothing brand"} button={"  See Offers" } />
                        
                    </div>
                </Box>
            </div>
       
        </> 
    )
}

export default BannerSecond