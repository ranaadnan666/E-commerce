import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Stack,
    IconButton,
    Typography,

} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ClearIcon from '@mui/icons-material/Clear';
const products = [
    {
        id: 1,
        title: "Angles melu zip jeans slim black used",
        image: "http://localhost:3000/static/media/data6.06de49de6e59a0371221.jpg",
        size: "W32",
        color: '#5884aa',
        price: 200,
    },
    {
        id: 2,
        title: "Angles melu zip jeans slim black used",
        image: "http://localhost:3000/static/media/data7.d0f05b574d0a6bfe8b61.jpg",
        size: "W32",
        color:'#c35c71',
        price: 300
    }
];

const CartCard = () => {

    const [quantity, setQuantity] = useState(1);

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Size</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell component="th" scope="row" sx={{ alignItems: "center" }}>
                                <Stack direction={"row"} spacing={1}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{ width: '100px', height: '140px' }}
                                    />
                                    <Stack>
                                        <h3 style={{ width: '50%' }}
                                        >{item.title}
                                        </h3>
                                        <span style={{ height: "15px", width: "15px", backgroundColor:item.color  }}></span>
                                    </Stack>
                                   
                                </Stack>
                               
                            </TableCell>
                            <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                            <TableCell align="right">{item.size}</TableCell>
                            <TableCell align="right">
                                <Stack direction={"row"} alignItems="center" sx={{ border: '1px solid gray',padding:'5px' }} spacing={1}>
                                    <IconButton onClick={handleRemove} >
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography variant="body1"> {quantity}</Typography>
                                    <IconButton onClick={handleAdd}>
                                        <AddIcon />
                                    </IconButton>
                                </Stack>
                            </TableCell>
                            <TableCell align="right" >
                                ${(item.price * quantity).toFixed(2)}
                            </TableCell>
                            <TableCell align="right" >
                                <Stack direction={"row"} spacing={1}>
                                    <FavoriteBorderIcon sx={{ background: '#e6f1fa' ,padding:'5px'}}  />
                                    <ModeEditOutlineOutlinedIcon sx={{ background: '#e6f1fa', padding: '5px' }} />
                                    <ClearIcon sx={{ background: '#e6f1fa', padding: '5px' }} />
                               </Stack>
                            </TableCell>
                        </TableRow>
                    )
                    )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CartCard