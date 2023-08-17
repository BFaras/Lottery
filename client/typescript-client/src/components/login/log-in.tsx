import { Grid ,Typography ,Button} from '@mui/material';
import React from 'react';
import { Navigation } from '../navigation/navigation';
import { About } from '../about/about';
import { NavLink } from 'react-router-dom';
import { LogInDialog } from './log-in-dialog';





function LogIn() {
    return (
        <Grid
            container
            style={{
                backgroundColor: "#181938",
                display: "flex",
                justifyContent: "center",
                height: '90vh',
                width: "100vw",
                overflow: "hidden"
            }}
        >
            <LogInDialog />
        </Grid>
    );
}


export function LogInView(){
    return(
        <Grid >
            <Navigation></Navigation>
            <LogIn></LogIn>
        </Grid>
    )
}