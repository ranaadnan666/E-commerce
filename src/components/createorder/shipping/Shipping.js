import { Grid } from '@mui/material'
import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function Shipping() {
  return (
    <>
      <Grid container>
        {/* ==============left side================= */}
        <Grid item md={8} mt={2} xs={12} sm={12}>
          <LeftSide />

        </Grid>
        {/* ============== right side================= */}
        <Grid item md={4} mt={2} xs={12} sm={12}>
          <RightSide />
        </Grid>

      </Grid>
    </>
  )
}

export default Shipping