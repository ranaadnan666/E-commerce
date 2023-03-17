import { Grid } from '@mui/material'
import React from 'react'
import Left from './Left'
import Right from './Right'

function Shop() {
  return (
    <>

      <Grid container mt={2} width={'98%'} mx="auto" >
        {/* left */}
        <Grid item md={3} >
          <Left/>
        </Grid>

        {/* right */}
        <Grid item md={9} >
          <Right />

        </Grid>
      </Grid>
    </>
  )
}

export default Shop