import { Box, Breadcrumbs, Divider, Grid, Typography, Stack, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ApplyDiscount from './ApplyDiscount'
import CartCard from './CartCard'
function ShoppingCart() {
    return (
        <>

            {/* ===========go back to home page======== */}
            <Box width={{ md: "10%", xs: '60%', sm: '70%' }} mx={'auto'} pt={3} mb={2}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link style={{ textDecoration: 'none', color: 'gray' }} to="/">
                        Home
                    </Link>
                    <Typography color="gray">Shopping Cart</Typography>
                </Breadcrumbs>
            </Box>

          
            <h1 style={{ textAlign: 'center' }}>Shopping Cart</h1>

            {/*============ cart-Products========== */}

            <Grid container width={{ md: '80%',xs:'95%' }} mx={'auto'} spacing={2}>

                {/*============ left side======== */}
                <Grid item md={8} xs={12}  >
                    <CartCard />
                    <Divider />
                    <Stack direction={{xs:'column',sm:'row',md:'row'}} justifyContent={'space-between'} mt={2} mb={2} >
                        <Button  sx={{
                            marginTop: '5px',
                            background: '#f0f2f2', border:'2px solid #d5d5d5',color: 'black',textTransform:"uppercase", width: '200px', height: '50px'
                        }} mt={2}>Continue Shopping</Button>
                        
                        <Button  
                              sx={{
                                background: '#f0f2f2',marginTop:'5px', border: '2px solid #d5d5d5', color: 'black', textTransform: "uppercase", width: '200px', height: '50px'
                        }}>Clear Shopping Cart</Button>
                    </Stack>
                </Grid>

                {/*============== right side============ */}
                <Grid item md={4} mb={2} xs={12}>
         
                <ApplyDiscount/>

        
                </Grid>

            </Grid>

         
        </>
    )
}

export default ShoppingCart