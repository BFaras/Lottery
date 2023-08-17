import { Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { Navigation } from '../navigation/navigation';
import { About } from '../about/about';
import { NavLink } from 'react-router-dom';



function HomeView() {



    return (
        <Grid container style={{ display: 'flex', flexDirection: 'column', backgroundColor: "#181938", height: '90vh', overflow: "hidden" }}>
            <Grid item xs={12} sx={{ ml: "5%", mt: "5%", }}>
                <Typography variant='h3' color={"#fefefe"} sx={{ fontSize: '60px' }} > Welcome to the WebScrapper Lottery</Typography>
                <Typography variant='body2' color={"#fefefe"} sx={{ fontSize: '16px', mt: "2vh", ml: "1vw" }} > The website where we use a WebScrapper in order to retrieve automatically products from Amazon and turn them into prizes for you</Typography>
                <NavLink to="/about" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color='secondary' sx={{ mt: "20%", ml: "1vw" }} >

                        <Typography variant='button' color={"primary"} sx={{ fontSize: '14px', fontWeight: "600" }} >Learn more</Typography>
                    </Button>
                </NavLink>
            </Grid>
        </Grid>
    )
}


export function Home() {
    return (
        <Grid >
            <Navigation></Navigation>
            <HomeView></HomeView>
        </Grid>
    )
}