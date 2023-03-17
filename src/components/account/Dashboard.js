import { Button, Grid,Stack } from '@mui/material'

import React from 'react';
import {Breadcrumbs, Link} from '@mui/material';
import AccountSide from '../../layout/list/AccountSide';



const MyDashboard=()=> {
   
    return (
        <Grid p={1}>
            <Grid sx={{ display: 'flex', width: "100%", minHeight: "100px", justifyContent: "center", alignItems: "center"}} >
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/" underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                       to="/"
                    >
                        MyDashboard
                    </Link>
                </Breadcrumbs>
            </Grid>
            <h2 style={{ textAlign: "center" }}>My Dashboard</h2>
            <Grid container sx={{width:{ lg:"70%", xs:"90%" }}} mx="auto" border="1px solid black" padding="20px" >
                <Grid  lg={8} md={12} rowGap={3} sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}} mx={"auto"} columnGap={7} >
                <Grid  md={4} mt="40px"  >
                    {/* ===========Account sidebae============ */}
               <AccountSide/>
                </Grid>
            <Grid mx="auto" xs={12} md={4} >
           <h3>Account Information</h3>
           <h3>Contact Information</h3>
           <Stack direction={"column"} sx={{color:"gray"}}>
           <span>Alex driver</span>
           <span>example@gmai.com</span>
           </Stack>
           <Stack direction={"row"} justifyContent={"space-between"} height={"40px"} p={"5px 0"}>
<button  >Edit</button>
<button  >Change password</button>
           </Stack>
           <h3>Address Book</h3>
           <h3>Default Billing Adress</h3>
          <Stack direction={"column"}>
        
           <span style={{color:"gray"}}>example@gmai.com</span>
           <button style={{width:"100px"}} >Edit Address</button>
          </Stack>

            </Grid>
            <Grid mx="auto" xs={12} md={4} >

           <h3>News Letters</h3>
          <Stack direction={"column"}>
        
           <span style={{color:"gray"}}>you don't subscribe our newsletters</span>
           <button style={{width:"60px"}} >Edit</button>
          </Stack>

          <Stack direction={"column"} marginTop={"70px"}>
          <h3>News Letters</h3>
        
           <span style={{color:"gray"}}>you don't subscribe our newsletters</span>
           <button style={{width:"60px"}} >Edit</button>
          </Stack>
            </Grid>
                </Grid>
            </Grid>
         
        </Grid>
    )
}

export default MyDashboard
