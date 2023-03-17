import React, { useState } from 'react'; 
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Data from './Data';

function ArticleCard() {
    const [data, setData] = useState(Data)
    return (
        <Grid>
            <Typography variant='h5' ml={14} >You May Also Like</Typography>
            <Grid container mx="auto" sx={{ width: "90%" }} >
                {
                    data?.map((item,i)=>{
                        return (<Grid  key={i} item lg={2.4} md={4} sm={6} xs={12} spacing={2} padding={2} sx={{ maxWidth: 300 }}> 
                             <CardActionArea  sx={{":hover":{boxShadow:8}}} >
                                 <CardMedia
                                     component="img"
                                     height={500}
                                     image={item?.image}
                                     alt="green iguana"
                                 />
                                 <CardContent>
                                     <Typography gutterBottom variant="h5" component="div">
                                         {item?.name}
                                     </Typography>
                                     <Typography variant="body2" color="text.secondary">
                                         {item?.details}
                                     </Typography>
                                     <Typography variant="h4" color="text.secondary">
                                         {item?.price}
                                     </Typography>
                                 </CardContent>
                           </CardActionArea>   
                        </Grid>)
                    })
                }
            </Grid>
        </Grid>
    )
}

export default ArticleCard;
