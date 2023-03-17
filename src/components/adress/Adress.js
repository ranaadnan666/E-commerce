import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import {Breadcrumbs, Link} from '@mui/material';
import { Button, Typography } from "@mui/material";
import AccountSide from "../../layout/list/AccountSide";
const Address = (props) => {
  return (
    <Grid mt={4}>
      <Stack width={{ xs: "100%", md: "70%" }} mx={"auto"} p={1}>
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
                        
                        {props.title==="Edit" ? "My Dashboard":"Add New Address"}
                    </Link>
                </Breadcrumbs>
            </Grid>
            <h2 style={{ textAlign: "center" }}> {props.title==="Edit" ? "Edit Account Information" : "Add New Address" }</h2>
   
        <Stack sx={{ border: "1px solid gray" }}  direction={{xs:"column",md:"row"}} p={1} >
        <Grid md={3} mx={"auto"} mt={7}>
     <AccountSide/>
       </Grid>
          <Stack width={{xs:"100%",md:"60%"}} mx={"auto"} rowGap={3}>
            <h2>Contact Information</h2>
            <Stack
              direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}
            >
              <lable>First Name *</lable>
              <input
                style={{ width: "60%", padding: "8px" }}
                type="text"
                placeholder="first name"
              />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}
            >
              <lable>Last Name *</lable>
              <input
                style={{ width: "60%", padding: "8px" }}
                type="text"
                placeholder="last name"
              />
            </Stack>
            {
                     
                        props.title==="Edit" ? 
                  (
                    <>
                          <Stack direction={"row"} marginLeft={{xs:"10px",md:"80px"}} columnGap={2}>
                        <input type="checkbox" />
                        <lable>Change Email </lable>
                      </Stack> 
                       <Stack direction={"row"} marginLeft={{xs:"10px",md:"80px"}} columnGap={2}>
                       <input type="checkbox" />
                       <lable>Change password </lable>
                     </Stack> 
                     <Button sx={{width:"80px",marginLeft:{xs:"10px",md:"80px"}}} variant="outlined">Save</Button>
                    </>
                  )
                        :
                      (
                        <>
  <Stack
              direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}
            >
              <lable>Company *</lable>
              <input
                style={{ width: "60%", padding: "8px" }}
                type="text"
                placeholder="company"
              />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}
            >
              <lable>Phone No *</lable>
              <input
                style={{ width: "60%", padding: "8px" }}
                type="text"
                placeholder="phone number"
              />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}
            >
              <lable>Fax *</lable>
              <input
                style={{ width: "60%", padding: "8px", marginLeft:"40px"}}
                type="text"
                placeholder="company"
              />
            </Stack>
            <h2>Address</h2>
            <Stack
              direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}
            >
              <lable>Street *</lable>
              <textarea
                style={{ width: "60%", height:"50px", padding: "8px",marginLeft:"20px" }}
                type="text"
                placeholder="street"
              />
            </Stack>
            <Stack direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}>
<label for="cars">Country *</label>

<select name="cars" id="cars" style={{ width: "60%",  padding: "8px" }}>
  <option value="volvo"> select country</option>
  <option value="saab">pakistan</option>
  <option value="mercedes">india</option>
  <option value="audi">bangladesh</option>
</select>
            </Stack>
            <Stack direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}>
<label for="cars">State *</label>

<select name="cars" id="cars" style={{ width: "60%",  padding: "8px",marginLeft:"20px" }}>
  <option value="volvo"> select region,state</option>
  <option value="saab">pakistan</option>
  <option value="mercedes">india</option>
  <option value="audi">bangladesh</option>
</select>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}
            >
              <lable>Postal code *</lable>
              <input
                style={{ width: "60%", padding: "8px", marginLeft: "-30px" }}
                type="text"
                placeholder="postal code"
              />
            </Stack>
        
            <Stack
              width={{xs:"100%",sm:"85%"}}
              mx={"auto"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Button variant="outlined">Save Address</Button>
              
            </Stack>
                        </>)
            }
          
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Address;
