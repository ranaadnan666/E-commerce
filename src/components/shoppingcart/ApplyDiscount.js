import React, { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, Divider, FormControlLabel, MenuItem, Radio, Select, Stack, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
function ApplyDiscount() {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            {/*==================== Apply Discount Code ===============*/}
            
            <Card sx={{ bgcolor: '#f0f2f2', padding: '20px' ,border:'1px solid gray'}} >
                <Typography variant='h4'>
                    Apply Discount Code
                    <Stack direction={"row"} mt={2} mb={2}>
                        <TextField
                            id="standard-name"
                            placeholder="Enter Discount code"
                            sx={{
                                width: "100%",
                            }}
                            InputProps={{
                                endAdornment: "ApplyDiscont"
                            }}
                        />

                    </Stack>
                </Typography>
                <Accordion sx={{ bgcolor: '#f0f2f2' }}
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}

                >
                    <AccordionSummary
                        expandIcon={expanded ? <AddIcon /> : <RemoveIcon />}

                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant='h6' fontSize={"16px"}>Estimate Shipping and Taxes</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography fontSize={"14px"}>Enter your destination to get a shipping estimate</Typography>
                        <Stack direction={'column'} spacing={2} mt={2}>

                            <Stack
                                direction={{xs:'column',md:'row'}}
                                alignItems={"center"}
                               spacing={{xs:'2',md:'5'}}
                            >    
                                <Box sx={{ width:{xs:'100%',md:'40%'}}}>
                                    <lable>Country<span style={{ color: 'red' }}>*</span></lable>
                                </Box>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    sx={{ width: { xs:'100%',md:'60%'} }}
                                    defaultValue="United State"
                                >
                                    <MenuItem value={"Alaska"} >United State</MenuItem>
                                    <MenuItem value={"Asia"}>Pakistan</MenuItem>
                                    <MenuItem value={"America"}>India</MenuItem>
                                    <MenuItem value={"Africa"}>England</MenuItem>
                                    <MenuItem value={"South America"}>Kenya</MenuItem>
                                </Select>
                            </Stack>

                            <Stack
                                direction={{xs:'column',md:'row'}}
                                alignItems={"center"}
                                spacing={{xs:'2',md:'5'}}
                            >
                                <Box sx={{ width: { xs: '100%', md: '40%' } }}>
                                    <lable >State/Province<span style={{ color: 'red' }}>*</span></lable>
                                    </Box>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    sx={{ width: { xs:'100%',md:'60%'} }}
                                    defaultValue="Alaska"
                                >
                                    <MenuItem value={"Alaska"}>Alaska</MenuItem>
                                    <MenuItem value={"Asia"}>Asia</MenuItem>
                                    <MenuItem value={"America"}>America</MenuItem>
                                    <MenuItem value={"Africa"}>Africa</MenuItem>
                                    <MenuItem value={"South America"}>South America</MenuItem>
                                </Select>
                            </Stack>
                            <Stack
                                direction={{xs:'column',md:'row'}}
                                alignItems={"center"}
                                spacing={{xs:'2',md:'5'}}
                            >
                                <Box sx={{ width: { xs: '100%', md: '40%' } }}>
                                    <lable>Zip/Postal Code</lable>
                                    </Box>
                                <TextField
                                    type="password"
                                    placeholder=""
                                    sx={{ width: { xs:'100%',md:'60%'} }} />
                            </Stack>
                              
                           
                                <Stack direction={"column"} spacing={2} >
                                <FormControlLabel value="Fixed 5.00EUR" control={<Radio sx={{
                                        color: "black",
                                        '&.Mui-checked': {
                                            color: "black",
                                        },
                                }} checked />} label="Fixed 5.00EUR" />
                                    
                                <Box>
                                   < Typography sx={{fontSize:'16px',color:'black' ,fontWeight:700}} >Best Way</Typography>
                                    <FormControlLabel value="Table Palte 10.00EUR" control={<Radio sx={{
                                        color: "black",
                                        '&.Mui-checked': {
                                            color: "black",
                                        },
                                    }} />} label="Table Palte 10.00EUR" />
                                </Box>


                            </Stack>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Card>


            {/*======================== Subtotal====================== */}
            <Card sx={{ bgcolor: '#f0f2f2', padding: '20px', border: '1px solid gray',marginTop:'10px' }}   >
                <Stack direction={"column"} spacing={3}>

               
                <Stack direction={"row"} alignItems={'center'} justifyContent={'space-between'} >
                    <Typography sx={{ color: 'black', fontWeight: '800', fontSize: '16px' }}>Subtotal</Typography>
                    <Typography sx={{ color: 'black', fontWeight: '800', fontSize: '16px' }}>120.00EUR</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={'center'} justifyContent={'space-between'} >
                    <Typography>Tax</Typography>
                    <Typography>0.00EUR</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography sx={{ color: 'black', fontWeight: '800', fontSize: '16px' }}>Order Total</Typography>
                        <Typography sx={{ color: 'black', fontWeight: '800', fontSize: '16px' }}>120.00EUR</Typography>
                </Stack>
                <Divider />
                <Typography sx={{
                    textTransform:'uppercase',textAlign:'center',padding:'5px 0px'
                }}
                    >Check Out with multiple Address </Typography>
                </Stack>
            </Card>
            <Button fullWidth sx={{
                backgroundColor: '#000000', color: 'white', height: '50px', ":hover": {
                    backgroundColor: '#000000', color: 'white'
                }
            }}>Proceed To Checkout</Button>
        </>
    )
}

export default ApplyDiscount