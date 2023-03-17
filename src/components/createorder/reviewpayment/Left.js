import { Breadcrumbs, Typography, Stack, Checkbox, TextField, } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Left() {
  return (
      <>
          <h2>Payment Mehod:</h2>
          <Breadcrumbs aria-label="breadcrumb">
              <Typography color="gray">Check</Typography>
              <Typography color="gray">Money Order</Typography>
          </Breadcrumbs>

          <Stack direction={"row"}>
              <Checkbox
                  defaultChecked
                  sx={{
                      color: "black",
                      '&.Mui-checked': {
                          color: "black", 
                      },
                  }}
              />
              <p>My billing and shipping address are the same</p>
          </Stack>
          <Box pl={5} color='#b0b0b0'>
              <Typography>Muhammad Rizwan</Typography>
              <Typography>pahse 1,block D 540</Typography>
              <Typography>Lahore,Asia region 54000</Typography>
              <Typography>Pakistan</Typography>
              <Typography sx={{ color:'#a5c8e2'}}>+92 123 456 7890</Typography>
          </Box>

        
          <h2>Apply Discont Code</h2>
          <Stack direction={"row"}>
              <TextField
                  id="standard-name"
                  placeholder="Enter Discount code"
                  sx={{
                      width: "60%",
                  }}
                  InputProps={{
                      endAdornment: "ApplyDiscont"
                  }}
              />

          </Stack>
      </>
  )
}

export default Left