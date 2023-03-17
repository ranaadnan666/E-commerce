import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Divider, Stack, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function SummaryCard(props) {
    const [expanded, setExpanded] = useState('panel1');
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Card sx={{ bgcolor: '#f0f2f2', padding: '20px' }} >
                <Typography variant='h4'>
                    Order Summary:
                </Typography>
                <Divider />

                <Stack direction={"column"} spacing={1} mt={2}>
                <Stack direction={"row"} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography>{props.subTotal }</Typography>
                        <Typography>{props.subtotalprice }</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography>{props.shipping}</Typography>
                        <Typography>{props.shippingfee }</Typography>
                </Stack>
                
                    <Typography> {props.flatrate }</Typography>
                </Stack>
                <Box>
                    {props.divider}
                </Box>

                <Stack direction={"row"} alignItems={'center'} justifyContent={'space-between'}>
                    <h4> {props.total }</h4>
                    <h4> {props.totalprice }</h4>
                </Stack>


                <Accordion sx={{ bgcolor: '#f0f2f2' }}
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>1 item in Cart</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction={"row"} justifyContent="space-between"> 
                            
                            <Stack direction={"row"} spacing={2}>
                                <img
                                    src={"http://localhost:3000/static/media/data1.5ed5e022c5be94392585.jpg"}
                                    alt='product'
                                    width={"80px"}
                                    height={'auto'}>
                                </img>
                                <Stack >
                                    <Typography sx={{ width: '70%', color: 'black', fontWeight: '700' }}>
                                        Angles melu zip jeans slim black used
                                    </Typography>
                                    <Typography >
                                      Quentity:1
                                    </Typography>
                                    <Typography >
                                       View Details
                                    </Typography>
                                </Stack>
                            </Stack>

                            <Stack>
                                <Typography>129.00EUR</Typography>
                            </Stack>
                          
                          
                        </Stack>
                        <br></br>
                        <Stack direction={"row"} justifyContent="space-between">

                            <Stack direction={"row"} spacing={2}>
                                <img
                                    src={"http://localhost:3000/static/media/data1.5ed5e022c5be94392585.jpg"}
                                    alt='product'
                                    width={"80px"}
                                    height={'auto'}>
                                </img>
                                <Stack >
                                    <Typography sx={{ width: '70%', color: 'black', fontWeight: '700' }}>
                                        Angles melu zip jeans slim black used
                                    </Typography>
                                    <Typography >
                                        Quentity:1
                                    </Typography>
                                    <Stack direction={"row"}>
                                        <Typography  >
                                            View Details
                                        </Typography>
                                        <ExpandMoreIcon />
                                    </Stack>
                                    
                                </Stack>
                            </Stack>

                            <Stack>
                                <Typography>129.00EUR</Typography>
                            </Stack>


                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Card>
        </>
    )
}

export default SummaryCard