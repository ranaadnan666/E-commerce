import Grid from '@mui/material/Grid'
import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const HomeContainer = () => {
  return (
  <Grid>
   <Grid>
    <Navbar/>
    </Grid>
    <Grid mt={2.8}>
    <Outlet/>
      </Grid>
      <Grid>
      <Footer/>
      </Grid>
  </Grid>
  )
}

export default HomeContainer