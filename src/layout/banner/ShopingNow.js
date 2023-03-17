import React from "react";
import Grid from "@mui/material/Grid";
import { border, Box, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
const ShoppingNow = (props) => {
  return (
    <Grid >
        

      <Stack justifyContent={"space-between"} direction="row" p={1} mt={2} sx={{backgroundColor:`${props.bgcolor}`}} alignItems={"center"}>
       
          <Stack width={{ xs: "90%", sm: "70%", md: "60%" }} mx={"auto"}>
            <Stack
              width={{xs:"100%",md:"80%"}}
              rowGap={{ xs: 0, sm: 2 }}
              mx={"auto"}
              
              p={1}
            >
              <Typography
                sx={{
                  color:`${props.txtcolor}`,
                  fontSize: { xs: "1.4rem", sm: "2rem" },
                  fontWeight: { xs: "500", sm: "800" },
                }}
              >
                SHOPPING WITHOUT LIMIT.
              </Typography>
              <Typography width={{xs:"100%",md:"50%"}} sx={{color:`${props.txtcolor}`}}>
                you can chose the best option for you, and it does not matter
                whether you are in prague or san francisco. We will deliver your
                purchase anywhere!{" "}
              </Typography>
              <Button sx={{ width: "120px" }} variant="outlined">
                shop now
              </Button>
            </Stack>
          </Stack>
          <Box
          
          sx={{ width:{xs:"300px",md: "400px"}, height: "50vh" }}
          mt={6}
        >
            <img style={{width:"100%",height:{xs:"50%",md:"80%"}}} src={props.image} alt="image"/>
            </Box>
        
      </Stack>
      
    </Grid>
  );
};

export default ShoppingNow;
