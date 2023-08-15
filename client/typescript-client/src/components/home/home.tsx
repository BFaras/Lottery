import { Grid ,Typography ,Button} from '@mui/material';
import React from 'react';



function HomeView(){
    


    return(
        <Grid container style={{display: 'flex', flexDirection: 'column',backgroundColor :"#181938",height: '100vh',overflow: "hidden"}}>
            <Grid item xs = {12} sx={{ml:"5vw",mt:"20vh",}}>
            <Typography variant='h3' color={"#fefefe"} sx={{ fontSize: '60px' }} > Welcome to the WebScrapper Lottery</Typography>
            <Typography variant='body2' color={"#fefefe"} sx={{ fontSize: '16px', mt:"2vh",ml:"1vw" }} > The website where we use a WebScrapper in order to retrieve automatically products from Amazon and turn them into prizes for you</Typography>
            <Button variant="contained" color='secondary' sx={{ mt:"35vh",ml:"1vw"}}>
                <Typography variant='button' color={"primary"} sx={{ fontSize: '14px',fontWeight:"600" }} >Learn more</Typography>
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