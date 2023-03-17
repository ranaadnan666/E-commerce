import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BasicCard = (props) => {
  return (
      <>
          <Link to={props.link} style={{textDecoration:'none'}}>
          <Card
              sx={{ display: 'flex', flexDirection: 'column', ":hover": { boxShadow: 8 ,cursor:'pointer'} }}
          >
              <CardMedia
                  component="img"
                  height="400"
                  image={props.image}
                  alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="p">
                    Top Woman
                  </Typography>
                  <Typography gutterBottom variant="h6">
                      {props.title}
                  </Typography>
                  <Typography>
                      {props.disc}
                  </Typography>
                  <Typography variant='p' sx={{ color: 'black', fontWeight: '800' }}>
                      {props.price} EUR
                      {/* <del>{props.oldprice} EUR</del> */}
                  </Typography>
              </CardContent>
              
              </Card>
          </Link>
      </>
  )
}

export default BasicCard