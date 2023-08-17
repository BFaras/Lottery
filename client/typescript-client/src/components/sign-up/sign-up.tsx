import { Grid ,Typography ,Button} from '@mui/material';
import React from 'react';
import { Navigation } from '../navigation/navigation';
import { About } from '../about/about';
import { NavLink } from 'react-router-dom';
import { SignUpDialog } from './sign-up-dialog';





function SignUp() {
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
            <SignUpDialog />
        </Grid>
    );
}


export function SignUpView(){
    return(
        <Grid >
            <Navigation></Navigation>
            <SignUp></SignUp>
        </Grid>
    )
}