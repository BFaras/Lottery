import { Grid ,Typography ,Button} from '@mui/material';
import React from 'react';



function HomeView(){
    


    return(
        <Grid container style={{display: 'flex', flexDirection: 'column',backgroundColor :"#181938",height: '100vh'}}>
            <Grid item xs = {12} sx={{ml:"5vw",mt:"20vh"}}>
            <Typography variant='h1' color={"#fefefe"} sx={{ fontSize: '60px' }} > Welcome to the WebScrapper Lottery</Typography>
            <Typography variant='body1' color={"#fefefe"} sx={{ fontSize: '16px', mt:"2vh" }} > If you are broke, this is the only place where you can get that Iphone15 and Xbox you want so much</Typography>
            <Button variant="contained" color='secondary' sx={{ mt:"30vh"}}>
                <Typography variant='button' color={"primary"} sx={{ fontSize: '14px' }} >Learn more</Typography>
            </Button>
            </Grid>
        </Grid>
    )
}


export function Home(){




    return(
        <React.Fragment>
            <HomeView></HomeView>
        </React.Fragment>
    )
}