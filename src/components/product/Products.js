import { Button, Grid, Typography, Stack } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react';
import dres from "../../images/dres.jpg";
import { productData } from './ProductData';
import ButtonGroup from '@mui/material/ButtonGroup';
import Details from './Details';
import ArticleCard from "../article/ArticleCard"

function Products() {
    const [productdata, setProductdata] = useState(productData)
    return (
        <Grid>
            <Grid container sx={{ width: { lg: "50%", xs: "80%", md:"90%",sm:"90%" }, mx: "auto", mt: "100px" }} >
                <Grid item lg={1} xs={3} sm={1.5} >
                    <img src={dres} style={{ width: "50px", height: "100px" }} /> <br /> <br />
                    <img src={dres} style={{ width: "50px", height: "100px" }} /> <br /> <br />
                    <img src={dres} style={{ width: "50px", height: "100px" }} />
                </Grid>
                <Grid item lg={4.5} xs={8} sm={4.5} >
                    <img src={dres} style={{ height: "500px", width: "90%" }} />
                </Grid>
                <Grid item lg={6} xs={12} sm={6} >
                    <Typography variant='body2' >Home / Womens Dress / Angels malu</Typography> <br />
                    <Button variant='outlined' >FENDI</Button>
                    <Typography variant='h4' >
                        Women Black Checked Fit and Flare Dress
                    </Typography> <br />
                    <Typography variant='title1' >SELECT SIZE (INCHES)</Typography>
                    <Grid sx={{ display: "flex", width:{lg:"50",xs:"50%"} }} >
                        {
                            productdata.map((item, i) => {
                                return <div style={{ display: "flex", width: "60%", justifyContent: "space-between", height: "100px", padding: "7px" }} >
                                    <Box sx={{
                                        width: "30px", height: "30px", border: "1px solid black", fontSize: "8px", display: "flex",
                                        justifyContent: "center", alignItems: "center"
                                    }}>{item?.data}</Box>
                                </div>
                            })
                        }
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "space-between", width:{lg:"80%",md:"80%", sm:"90%",xs:"80%"} }}>
                        <Stack>
                            <Typography>QUANTITY</Typography>
                            <ButtonGroup variant="outlined" aria-label="outlined button group"  >
                                <Button>-</Button>
                                <Button>1</Button>
                                <Button>+</Button>
                            </ButtonGroup>
                        </Stack>
                        <Stack>
                            <Typography>PRICE TOTAL</Typography>
                            <Typography mt={1} >90,00 EUR</Typography>
                        </Stack>
                    </Grid>
                    <br />
                    <Grid sx={{ display: "flex", justifyContent: "space-between",width:{lg:"80%",md:"80%", sm:"90%",xs:"80%"} }}>
                        <Button variant='outlined' sx={{ backgroundColor: "black", color: "white", width: "60%", ":hover": { backgroundColor: "black" } }} >ADD TO BAG</Button> &nbsp;&nbsp;
                        <Button variant='outlined' sx={{ color: "black", width: "60%" }} ><b>SAVE</b></Button>
                    </Grid> <br />
                    <Grid sx={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
                        <Typography sx={{ fontSize: "10px" }} >FREE SHIPPING</Typography>
                        <Typography sx={{ fontSize: "10px" }} >Product code: RFKK1024</Typography>
                        <Typography sx={{ fontSize: "10px" }} >TAGS: NEW arrivals, Top womenG</Typography>
                    </Grid>
                </Grid>

            </Grid>
              
              <Details/>
              <ArticleCard/>
            
        </Grid>

    )
}

export default Products;
