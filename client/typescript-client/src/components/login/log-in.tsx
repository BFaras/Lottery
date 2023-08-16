import { Grid ,Typography ,Button} from '@mui/material';
import React from 'react';
import { Navigation } from '../navigation/navigation';
import { About } from '../about/about';
import { NavLink } from 'react-router-dom';





function LogIn(){
    return(
        <Grid container style={{backgroundColor :"#181938",height: '90vh',overflow: "hidden"}}>
            <Grid item>

            </Grid>


        </Grid>
    )
}


export function LogInView(){
    return(
        <Grid >
            <Navigation></Navigation>
            <LogIn></LogIn>
        </Grid>
    )
}