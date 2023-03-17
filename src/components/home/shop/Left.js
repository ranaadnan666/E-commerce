import { Box, Checkbox, List, ListItem, Typography } from '@mui/material'
import React from 'react'

function Left() {
    return (
        <Box>
            <Typography variant='h5' color={"black"}>
                Shop Some Wear:
            </Typography>
            <Box role="group" aria-labelledby="sandwich-group">
                <List size="large">
                    <ListItem sx={{ color: 'black' }} >
                        <Checkbox /> Best Sallers
                    </ListItem>
                    <ListItem>
                        <Checkbox /> New Arivals
                    </ListItem>
                    <ListItem sx={{ color: 'black' }} >
                        <Checkbox defaultChecked /> Top Woman
                    </ListItem>
                    <ListItem sx={{ color: 'black' }} >
                        <Checkbox />Collection Summer
                    </ListItem>
                    <ListItem sx={{ color: 'black' }} >
                        <Checkbox />Collection Supring
                    </ListItem>
                    <ListItem sx={{ color: 'black' }} >
                        <Checkbox /> Trending
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Left