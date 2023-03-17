import { Grid } from '@mui/material'
import React from 'react'
import BasicCard from '../../../layout/home/BasicCard';
import branddata from './Data';

function Right() {
  return (
      <>
          <Grid container  justifyContent={"center"} spacing={2}  borderLeft={'1px solid  gray'}>
              {branddata.map((item) => {
                  return (
                      <Grid item  md={3} sm={6} xs={12}>
                          <BasicCard image={item.Product_img} price={item.Product_price} title={item.product_title} link={'/product'} />

                      </Grid>

                  );
              })}
          </Grid>
      </>
  )
}

export default Right