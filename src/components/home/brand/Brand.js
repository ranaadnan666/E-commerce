import { Button, Grid } from '@mui/material'
import React from 'react'

//=====================data=======================//
export const Data = [{
    id: 1,
    title: "Chanel"
},
{
        id: 2,
        title: "Burberry"
    },
    {
        id: 3,
        title:'Dior'
    },
    {
        id: 4,
        title: 'Fendi'
    },
    {
        id: 5,
        title: 'Versace'
    },
    {
        id: 6,
        title: 'GUCCl'
    },
    {
        id: 7,
        title: 'Armani'
    }

]

const Brand = () => {
  return (
      <>
       
              <h1 style={{ textAlign: 'center' }}>Choose Your Brand</h1>
       
          <Grid container border={'1px solid black'} width={'99%'} mx="auto" padding={'5px 0px'}>
              {
                  Data.map((item) => {
                      return (
                          <Grid item lg={1.7} alignItems={'center'}>
                              <Button sx={{ color: "black", fontSize: 'large', textTransform: 'uppercase' }} >
                                  {item.title}
                              </Button>
                          </Grid>
                                        
                      )
                  })
              }
          </Grid>
      </>
  )
}

export default Brand