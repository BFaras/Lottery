import { Box, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import { Navigation } from '../navigation/navigation';





function AboutView() {

    return (
        <Grid container style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#fefefe', height: '90vh', overflow: 'hidden' }}>
            <Grid item xs={12} style={{ position: 'relative' }}>
                <Box
                    style={{
                        position: 'absolute',
                        backgroundColor: '#fea004',
                        border: '1px solid green',
                        height: '80%',
                        width: '25%',
                        borderRadius: '10px',
                        right: '10vh',
                        top: '6vh',
                    }}
                ></Box>
                <Box
                    style={{
                        position: 'absolute',
                        border: '1px solid black',
                        height: '80%',
                        width: '25%',
                        borderRadius: '10px',
                        right: '15vh',
                        top: '4vh',
                    }}
                >
                    Image
                </Box>
            </Grid>
            <Grid item xs={12} style={{  position: 'relative' }}>
                <Box
                    style={{
                        position: 'absolute',
                        backgroundColor: '#fea004',
                        border: '1px solid green',
                        height: '80%',
                        width: '25%',
                        borderRadius: '10px',
                        left: '10vh',
                        top: '6vh',
                    }}
                ></Box>
                <Box
                    style={{
                        position: 'absolute',
                        border: '1px solid black',
                        height: '80%',
                        width: '25%',
                        borderRadius: '10px',
                        left: '15vh',
                        top: '4vh',
                    }}
                >
                    Image
                </Box>
            </Grid>
        </Grid>
    );
}








export function About() {

    return (
        <Grid>
            <Navigation></Navigation>
            <AboutView></AboutView>
        </Grid>


    )
}