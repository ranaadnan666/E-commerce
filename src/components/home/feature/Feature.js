import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import BasicCard from '../../../layout/home/BasicCard';
import branddata from '../shop/Data';

function Feature() {
  return (
      <>
          <Box width={'98%'} mx="auto">
          <Stack> <h4>Feature Item</h4> </Stack>
          <Grid container  justifyContent={"center"}  spacing={2}>
              {branddata.slice(0,5).map((item) => {
                  return (
                      <Grid item md={2.4} sm={6} xs={12}>
                          <BasicCard image={item.Product_img} price={item.Product_price} title={item.product_title} link={'/product'} />

                      </Grid>

                  );
              })}
              </Grid>
          </Box>
      </>
  )
}

export default Feature