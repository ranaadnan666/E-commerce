import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import {Breadcrumbs, Link} from '@mui/material';
import { Button, Typography } from "@mui/material";
const NewAccount = (props) => {
  return (
    <Grid mt={4}>
      <Stack width={{ xs: "100%", md: "70%" }} mx={"auto"} p={2}>
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
                        Create New Customer Account
                    </Link>
                </Breadcrumbs>
            </Grid>
        <h2 style={{ textAlign: "center" }}>Create New Customer Account</h2>
        <Stack sx={{ border: "1px solid gray" }}  direction={"column"} p={2}>
          <Stack width={{xs:"100%",md:"90%"}} mx={"auto"} rowGap={3}>
            <h2>Personal Information</h2>
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
            <Stack direction={"row"} marginLeft="30px" columnGap={2}>
              <input type="checkbox" />
              <lable>Sign up for Newsletter </lable>
            </Stack>
            <h2>Sign up for Newsletter</h2>
            <Stack
              direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}
            >
              <lable>Email *</lable>
              <input
                style={{ width: "60%", padding: "8px" }}
                type="email"
                placeholder="email"
              />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}
            >
              <lable>Password *</lable>
              <input
                style={{ width: "60%", padding: "8px", marginLeft: "-30px" }}
                type="password"
                placeholder="password"
              />
            </Stack>
            <Stack
            columnGap={{xs:5,sm:0}}
              direction={"row"}
              justifyContent="space-around"
              alignItems={"center"}
              
            >
              <Typography sx={{marginLeft:{xs:"-35px",sm:"0"},fontSize:{xs:"0.8rem",sm:"1rem"}}}>Confirm Password *</Typography>
              <input
                style={{ width: "60%", padding: "8px", marginLeft: "-80px" }}
                type="password"
                placeholder="confirm password"
              />
            </Stack>
            <Stack
              width={{xs:"100%",sm:"85%"}}
              mx={"auto"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Button variant="outlined">Create An A ccount</Button>
              <Button variant="outlined">Back</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default NewAccount;
