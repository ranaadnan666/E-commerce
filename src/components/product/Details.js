import React from 'react';
import { Grid, Typography } from '@mui/material';

function Details() {
    return (
        <Grid>
            <Grid container sx={{ width: { lg: "50%", md:"80%",sm:"95%",xs:"95%" }, backgroundColor: "#F8F9FB", padding: "20px", mx:{lg:"auto",xs:"auto"}, mt: "30px", 
            justifyContent: "space-between"}}>
                <Grid item sx={{fontSize:"25px"}} ><b>Details</b></Grid>
                <Grid sx={{fontSize:"25px"}} item >+</Grid>
            </Grid>
            <Grid spacing={4} container sx={{ width: { lg: "50%", xs: "95%",md:"80%",sm:"95%"}, backgroundColor: "#F8F9FB" , mx: "auto"}} >
                
                <Grid item lg={5} md={6} sm={6} xs={6} >
                    <Typography><b>ABOUT PRODUCTS</b></Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                        Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts. This tank features a smocked body,
                        adjustable straps, scoop neckline, ruffled hems, and a cropped fit.
                    </Typography><br />
                    <Typography ><b>ADVANTAGES</b></Typography>
                    <ul style={{ fontSize: "14px" }}>
                        <li>Smocked body</li>
                        <li>Adjustable straps</li>
                        <li>Scoop neckline</li>
                        <li>Ruffeled hems</li>
                        <li>Cropped length</li>
                        <li>Model is wearing a small</li>
                        <li>100% rayon</li>
                        <li>Machine washable</li>
                    </ul>
                    <Typography><b>ADVANTAGES</b></Typography>
                    <ul style={{ fontSize: "14px" }}>
                        <li>Smocked body</li>
                        <li>Adjustable straps</li>
                        <li>Scoop neckline</li>
                    </ul>
                </Grid>
                <Grid item lg={5} md={6} sm={6} xs={6} >
                    <Typography><b>SHIPPING</b></Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                        SHIPPING
                        We offer Free Standard Shipping for all orders over $75 to the 50 states and the District of Columbia. The minimum order value must be $75 before taxes,
                        shipping and handling. Shipping fees are non-refundable.
                    </Typography> <br />
                    <Typography sx={{ fontSize: "14px" }} >
                        Please allow up to 2 business days (excluding weekends, holidays, and sale days) to process your order.
                    </Typography> <br />
                    <Typography sx={{ fontSize: "14px" }}>
                        Processing Time + Shipping Time = Delivery Time
                    </Typography>
                </Grid>
            </Grid>

            <Grid container sx={{ width: { lg: "50%", md:"80%",sm:"95%",xs:"95%" }, backgroundColor: "#F8F9FB", padding: "20px", mx: "auto", mt: "30px", justifyContent: "space-between" }}>
                <Grid item ><b>Other information</b></Grid>
                <Grid item >+</Grid>
            </Grid>
            <Grid container sx={{ width: { lg: "50%", md:"80%",sm:"95%",xs:"95%" }, backgroundColor: "#F8F9FB", padding: "20px", mx: "auto", mt: "30px", justifyContent: "space-between" }}>
                <Grid item ><b>Another tab</b></Grid>
                <Grid item >+</Grid>
            </Grid>
        </Grid>
    )
}

export default Details
