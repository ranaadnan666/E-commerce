import { Card, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import blogdata from './Data';

function Blog() {
  return (
      <>
          <Box sx={{ backgroundColor:'#f8f9fb'}} mt={4} pb={4}>
              
              <h2 style={{ width:'98%' ,margin:'auto'}}>Blogs</h2>
        
              <Grid container spacing={2} width={'98%'} mx="auto" mb={4} mt={1}>
                
              {blogdata.map((item) => {
                  return (
                      <Grid item md={3} sm={6} xs={12}>
                  <Card>
                      <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                           {item.head}
                          </Typography>
                         
                          <Typography sx={{ mb: 1.5 }} variant={'h5'}>
                                      {item.title}
                          </Typography>
                          <Typography variant="body2">
                                      {item.disc}
                                  </Typography>
                              </CardContent>
                                  <Divider />
                              <CardActions>
                        <Typography >21 January 2018 by Github </Typography>
                      </CardActions>
                  </Card>
                      </Grid>
                  );
              })}
              </Grid>
          </Box>
      </>
  )
}

export default Blog