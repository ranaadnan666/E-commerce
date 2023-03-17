
import { Button, Divider, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'


function LeftSide() {
    return (
        <>
            {/* top */}
            <h2>Shipping Address:</h2>
            <Stack spacing={2}>
                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >
                    <Box sx={{width: { xs: "100%", md: '15%' }}}>
                        <lable >Email Address <span style={{ color: 'red' }}>*</span></lable>
                 </Box>
                  
                    <TextField
                        type="email"
                        placeholder="Ronicost@gmail.com"
                        sx={{ width: { xs: "100%", md: '60%' } }} />
                </Stack>

                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >
                    <Box sx={{ width: { xs: "100%", md: '15%' } }}>
                        <lable>Password</lable>
                        </Box>
                    <TextField
                        type="password"
                        placeholder="12345678"
                         sx={{ width: { xs: "100%", md: '60%' } }} />
                </Stack>

                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >
                    <Box sx={{ width: { xs: "100%", md: '15%' } }}>
                        <lable >Zip/Postal Code</lable>
                    </Box>
                    <TextField
                        type="password"
                        placeholder=""
                         sx={{ width: { xs: "100%", md: '60%' } }} />
                </Stack>
                <p>You Have Already have an account with us.Sign In or continue as Guest </p>
                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >

                    <Button sx={{
                        backgroundColor: '#000000', color: 'white', width: '120px', height: '50px', ":hover": {
                            backgroundColor: '#000000', color: 'white'
                        }
                    }}>Login</Button>
                    <p>Forgot Your Password?</p>
                </Stack>

            </Stack>

            <Box sx={{ width: '80%' }} mt={3} mb={3}>
                <Divider />
            </Box>

            {/* bottom */}
            <Stack spacing={2}>
                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >
                    <Box sx={{ width: { xs: "100%", md: '15%' } }}>
                        <lable >First Name  <span style={{ color: 'red' }}>*</span></lable>
                    </Box>
                    <TextField
                        type="text"
                        placeholder=""
                         sx={{ width: { xs: "100%", md: '60%' } }} />
                </Stack>

                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >
                    <Box sx={{ width: { xs: "100%", md: '15%' } }}>
                        <lable >Last Name <span style={{ color: 'red' }}>*</span></lable>
                    </Box>

                    <TextField
                        type="text"
                        placeholder=""
                         sx={{ width: { xs: "100%", md: '60%' } }} />
                </Stack>

                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >
                    <Box sx={{ width: { xs: "100%", md: '15%' } }}>
                        <lable >Company</lable>
                    </Box>
                    <TextField
                        type="text"
                        placeholder=""
                         sx={{ width: { xs: "100%", md: '60%' } }} />
                </Stack>

                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >
                    <Box sx={{ width: { xs: "100%", md: '15%' } }}>
                        <lable >Street Address<span style={{ color: 'red' }}>*</span></lable>
                    </Box>
                    <TextField
                        type="text"
                        placeholder=""
                         sx={{ width: { xs: "100%", md: '60%' } }} />
                </Stack>


                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >

                    <Box sx={{ width: { xs: "100%", md: '15%' } }}></Box>
                    <TextField
                        type="text"
                        placeholder=""
                         sx={{ width: { xs: "100%", md: '60%' } }} />
                </Stack>

                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >

                    <Box sx={{ width: { xs: "100%", md: '15%' } }}></Box>
                    <TextField
                        type="text"
                        placeholder=""
                         sx={{ width: { xs: "100%", md: '60%' } }} />
                </Stack>
                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >
                    <Box sx={{ width: { xs: "100%", md: '15%' } }}>
                        <lable >Country<span style={{ color: 'red' }}>*</span></lable>
                    </Box>
        
                    <TextField
                        type="text"
                        placeholder=""
                         sx={{ width: { xs: "100%", md: '60%' } }} />
                </Stack>

                <Stack
                    direction={{xs:'column',md:'row'}}
                    alignItems={"center"}
                    spacing={{xs:1,md:5}}
                >
                    <Box sx={{ width: { xs: "100%", md: '15%' } }}>
                        <lable >State/Province<span style={{ color: 'red' }}>*</span></lable>
                    </Box>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={{ width: { xs: "100%", md: '60%' } }}
                        defaultValue="Please select a region,state or province"
                    >
                        <MenuItem value={"Please select a region,state or province"} disabled>Please select a region,state or province</MenuItem>
                        <MenuItem value={"Asia"}>Asia</MenuItem>
                        <MenuItem value={"America"}>America</MenuItem>
                        <MenuItem value={"Africa"}>Africa</MenuItem>
                        <MenuItem value={"South America"}>South America</MenuItem>
                    </Select>

                </Stack>

                {/* Shipping Methods */}
                <Box>
                    <h2>Shipping Methods</h2>
                </Box>
               
                <Box sx={{ width: '80%' }} mt={3} mb={3}>
                    <Divider />
                </Box>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                >
                    <Stack direction={'row'} spacing={7} alignItems={'center'}>
                        <FormControlLabel value="$5.00" control={<Radio sx={{
                            color: "black",
                            '&.Mui-checked': {
                                color: "black",
                            },
                        }} />} label="$5.00" />
                        <p>Fixed</p>
                        <p>Flat Rate</p>
                    </Stack>
                  
                    <Box sx={{ width: '40%' }} mt={3} mb={3}>
                        <Divider />
                    </Box>
                    <Stack direction={'row'} spacing={7} alignItems={'center'}>
                        <FormControlLabel value="$10.00" control={<Radio sx={{
                            color: "black",
                            '&.Mui-checked': {
                                color: "black",
                            },
                        }} />} label="$10.00" />
                        <p>Table Rate</p>
                        <p>Best Way</p>
                    </Stack>
                
                </RadioGroup>
             

            </Stack>


        </>
    )
}

export default LeftSide