import { Divider, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SummaryCard from '../SummaryCard'
import EditIcon from '@mui/icons-material/Edit';
function Right() {
    return (
        <>
            <SummaryCard
                divider={<Divider/>}
                subTotal={"Cart SubTotal"}
                subtotalprice={"$56.25"}
                shipping={"Shipping"}
                shippingfee={"$5.00"}
                flatrate={'Flat Rate-Fixed'}
                total={'Order Total'}
                totalprice={'$120.00 EUR'}
            />
            {/* payment method */}
            <Stack direction={"row"} justifyContent="space-between" alignItems={"center"}>
                <h3>Payment Method:</h3>
                <EditIcon sx={{ background:'#a5c8e2'}}/>
            </Stack>
            <Box  color='#b0b0b0'>
                <Typography>Muhammad Rizwan</Typography>
                <Typography>pahse 1,block D 540</Typography>
                <Typography>Lahore,Asia region 54000</Typography>
                <Typography>Pakistan</Typography>
                <Typography sx={{ color: '#a5c8e2' }}>+92 123 456 7890</Typography>
            </Box>

            {/* shipping method */}
            <Stack direction={"row"} justifyContent="space-between" alignItems={"center"}>
                <h3>Shipping Method:</h3>
                <EditIcon sx={{ background: '#a5c8e2' }} />
            </Stack>
            <Box color='#b0b0b0'>
                <Typography>Flat Rate-Fixed</Typography>
                </Box>
        </>
    )
}

export default Right