import { Button,Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const BannerText = (props) => {
  return (
    <>
      <Box sx={{ color: 'black' }} >
        <Typography sx={{
          fontSize: { xs: "1rem", md: "2.3rem" },
          fontWeight: { xs: "600", md: "800" },
          textTransform: 'uppercase'

        }}>{props.title}</Typography>
        <Typography>{props.text }</Typography>
        <Button variant="outlined" sx={{
          color: 'black', borderColor: 'black', ":hover": {
            borderColor: 'black'
          }, textTransform: 'uppercase'
        }}>
          {props.button}
        </Button>
      </Box>
      </>
  )
}

export default BannerText