import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import bgi from "../../images/bg.jpeg"
import cell1 from "../../images/Cell1.svg";
import dres from "../../images/dresses.jpg";
import ArticleCard from './ArticleCard';

function Article() {
    return (
        <div>
            <div style={{ display:"flex",width: "50%",minHeight: "50px", justifyContent:"center",textAlign:"center",margin:"auto" }}>
                <p>Home / Womens Dress / Angels malu</p>     
            </div>
            <div>
                <div style={{ width: "100%", textAlign: "center", height: "600px" }} >
                    <img src={bgi} alt="image" style={{ width: "98%", height: "600px" }} />
                    <Grid sx={{
                        backgroundColor: "white", minHeight: "40px", width:{lg:"45%",md:"50%",sm:"70%",xs:"90%"}, margin: "auto", position: "relative", 
                        top: "-300px", padding: "auto", display: "flex", justifyContent: "center",
                        alignItems: "center"
                    }} >
                        <h3>WHAT TO WEAR TO A SUMMER WEDDING THIS YEAR?</h3>
                    </Grid>
                </div>
            </div>
            <Grid container mt={8} mx="auto" sx={{ width:{lg:"60%",md:"70%",sm:"90%",xs:"95%"}}} >
                <Grid item lg={6} md={6} sm={6} xs={6} >
                    <Stack>
                        <Typography variant='h4' >The Dress</Typography>
                        <Typography>
                            The Dress
                            It’s a tricky thing, being a wedding guest.
                            Among the endless list of requirements – buy a present, arrange accommodation, practise your small talk – there’s one obligation that trumps them all in terms of effort: fix up and look sharp.
                            The rules surrounding wedding guest dressing are as nuanced as they come.
                            There are some obvious musts – avoiding white is always a good idea – and others that are only acknowledged by serial wedding-goers, such as steering clear of stilettos unless you enjoy the feeling of numbness in your feet.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Stack>
                        <img src={cell1} style={{ height: "400px" }} />
                    </Stack>
                </Grid>

            </Grid>
            <Grid container spacing={2} mt={8} mx="auto" sx={{ width:{lg:"60%",md:"70%",sm:"90%",xs:"95%"}}} >
                <Grid item lg={6} md={6} sm={6} xs={6} >
                    <Stack>
                        <img src={dres} alt="dress" style={{ height: "400px", width:"80%" }} />
                    </Stack>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                    <Stack>
                        <img src={cell1} style={{ height: "400px" }} />
                    </Stack>
                </Grid>

            </Grid>
            <Grid container mt={8} mx="auto" sx={{ width:{lg:"60%",md:"70%",sm:"90%",xs:"95%"}}} >
                <Grid item lg={6} md={9} sm={10} >
                    <Stack>
                        <Typography variant='h4' >The Dress</Typography>
                        <Typography>
                            The Dress
                            It’s a tricky thing, being a wedding guest.
                            Among the endless list of requirements – buy a present, arrange accommodation, practise your small talk – there’s one obligation that trumps them all in terms of effort: fix up and look sharp.
                            The rules surrounding wedding guest dressing are as nuanced as they come.
                            There are some obvious musts – avoiding white is always a good idea – and others that are only acknowledged by serial wedding-goers, such as steering clear of stilettos unless you enjoy the feeling of numbness in your feet.
                            In the summer, things get even more complicated. Not only do you have to find a sweat-free way to “dress to the nines”, but you have to strike the right balance between playful sunshine garb and formal occasionwear. This forces you to ask difficult questions, such as “Is this wrap dress more ‘I do’ or ‘BBQ?’” and “Does this hat make me look like a chic French woman, or a dishevelled bird?”
                            It’s no mean feat, so here’s our handy guide to summer wedding guest dressing, with tips from industry experts on the trends and colours you need to know about this season .
                            It’s a tricky thing, being a wedding guest.
                            Among the endless list of requirements – buy a present, arrange accommodation, practise your small talk – there’s one obligation that trumps them all in terms of effort: fix up and look sharp.
                            The rules surrounding wedding guest dressing are as nuanced as they come.
                            In the summer, things get even more complicated. Not only do you have to find a sweat-free way to “dress to the nines”, but you have to strike the right balance between playful sunshine garb and formal occasionwear. This forces you to ask difficult questions, such as “Is this wrap dress more ‘I do’ or ‘BBQ?’” and “Does this hat make me look like a chic French woman, or a dishevelled bird?”
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item lg={6}  >
                    <Stack>

                    </Stack>
                </Grid>

            </Grid>
            <br/><br/>
            <ArticleCard />
        </div>
    )
}

export default Article
