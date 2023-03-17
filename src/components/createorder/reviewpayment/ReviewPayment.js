import { Grid } from '@mui/material'
import React from 'react'
import Left from './Left'
import Right from './Right'

function ReviewPayment() {
    return (
        <>
            <Grid container>
                {/* ==============left side================= */}
                <Grid item md={8} mt={2} xs={12} sm={12}>
                    <Left/>

                </Grid>
                {/* ============== right side================= */}
                <Grid item md={4} mt={2} xs={12} sm={12}>
                    <Right />
                </Grid>

            </Grid>
        </>
    )
}

export default ReviewPayment