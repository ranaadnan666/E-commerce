import { Grid } from '@mui/material'
import React from 'react'
import BannerFirst from './BannerFirst'
import BannerSecond from './BannerSecond'
import BannerThird from './BannerThird'

const MainBanner = () => {
    return (
        <>
            <Grid container mt={2} width={'99%'} mx="auto" spacing={2} >
                {/* left */}

                <Grid item lg={6}>
                    <Grid item lg={12}>
                        <BannerFirst />
                    </Grid>
                    <Grid item lg={12}>
                        <BannerSecond />
                    </Grid>
                </Grid>
                {/* right */}
                <Grid item lg={6}>
               <BannerThird/>
                </Grid>
            </Grid>
        </>
    )
}

export default MainBanner