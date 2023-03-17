import React from 'react'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
const MainCard = (props) => {

  return (
    <Stack>
     <Link to="/product" style={{textDecoration:"none"}}>
     <Card   sx={{ display: 'flex', flexDirection: 'column',"&:hover": {
            boxShadow:"0 0 10px gray",cursor:"pointer" }}}>
            <CardMedia
              component="img"
              height="194"
              image={props.img}
              alt="Paella dish"
            />
            <CardContent>
                <span style={{color:"gray"}}>
                    TOP WOMEN
                </span>
              <Typography sx={{color:"black"}} variant="body2" color="text.secondary">
              {
                props.title
              }
              </Typography>
              <h3 >
              {
                props.price
              }
              </h3>
            </CardContent>
            <Stack direction={"row"} width="30%" justifyContent={"space-around"} p={1}>
                <span style={{height:"15px",width:"15px",backgroundColor:"red"}}></span>
                <span style={{height:"15px",width:"15px",backgroundColor:"green"}}></span>
                <span style={{height:"15px",width:"15px",backgroundColor:"yellow"}}></span>
            </Stack>
          </Card>
     </Link>
    </Stack>
  )
}

export default MainCard