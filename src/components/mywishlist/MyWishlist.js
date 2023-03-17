import { Grid, Typography, CardActionArea, Button, Card } from '@mui/material'
import React, { useState } from 'react';
import ArticleCard from "../article/ArticleCard";
import { Breadcrumbs, Link } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Data from '../article/Data';
import { Box } from '@mui/system';
import AccountSide from '../../layout/list/AccountSide';



function MyWishlist() {
    const [data, setData] = useState(Data)
    return (
        <Grid>
            <Grid sx={{ display: 'flex', width: "100%", minHeight: "100px", justifyContent: "center", alignItems: "center" }} >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/" underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        to="/"
                    >
                        Dashboard
                    </Link>
                </Breadcrumbs>
            </Grid>
            <Grid container sx={{ width: { lg: "70%", xs: "90%" } }} mx="auto" border="1px solid black" padding="20px" >
                <Grid item lg={4} md={4} mt="40px" sx={{ display: "flex", height: "300px", justifyContent: "space-between", flexDirection: "column" }} >
                    {/* ==============sidebar================ */}
                    <AccountSide/>
                   
                </Grid>
                <Grid item lg={8} md={8} >
                    <Grid container mx="auto" sx={{ width: "90%" }} >
                        {
                            data?.map((item, i) => {
                                return (<Grid key={i} item lg={4} md={4} sm={6} xs={12} spacing={2} padding={2} sx={{ maxWidth: 300 }}>
                                    <CardActionArea sx={{ ":hover": { boxShadow: 8 } }} >
                                        <CardMedia
                                            component="img"
                                            height={300}
                                            image={item?.image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item?.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item?.details}
                                            </Typography>
                                            <Typography variant="h4" color="text.secondary">
                                                {item?.price}
                                            </Typography>
                                            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }} >
                                                <Button variant='outlined' >1</Button>
                                                <Button variant='contained' sx={{ fontSize: "10px" }} >ADD TO CART</Button>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Grid>)
                            })
                        }
                    </Grid>
                </Grid>
                <Grid lg={6} container spacing={2} width="60%" mx="auto" >
                    <Grid item >
                    <Button variant="outlined" sx={{color:"black",backgroundColor:"#F0F2F2"}} >SHARE WISHLIST</Button>
                    </Grid>
                    <Grid item >
                    <Button variant="outlined" sx={{color:"black",backgroundColor:"#F0F2F2"}} >UPDATE WISHLIST</Button>
                    </Grid>
                    <Grid item >
                    <Button variant="outlined" sx={{color:"black",backgroundColor:"#F0F2F2"}} >ADD ALL TO CART</Button>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', width: "100%", minHeight: "100px", justifyContent: "center", alignItems: "center" }} ></Grid>
        </Grid>
    )
}

export default MyWishlist
