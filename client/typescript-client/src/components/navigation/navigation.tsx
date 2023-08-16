import { Grid ,Typography ,Button} from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';


export function Navigation(){

    return(
        <React.Fragment>
            <Grid container style={{display: 'flex', justifyContent: "space-between", flexDirection: 'row',backgroundColor :"#181938",height: '10vh',overflow: "hidden"}} >
                <Grid item xs = {6}  sx = {{border: " 1 px solid yellow",display: 'flex', alignItems:"center",justifyContent: "flex-start", flexDirection: 'row',gap:"25px"}}>
                    <Button variant="contained" color='secondary' sx = {{height: "35px",ml:"5%"}}>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <Typography variant='button' color={"primary"} sx={{ fontSize: '14px',fontWeight:"600" }} >Home</Typography>
                    </NavLink>
                    </Button>
                </Grid>
                    <Grid item xs = {6} sx = {{border: " 1 px solid yellow",display: 'flex', alignItems:"center",justifyContent: "flex-end", flexDirection: 'row',gap:"25px"}}>
                    <Button variant= "outlined" color='secondary' sx = {{height: "35px"}}>
                        <Typography variant='button' color={"secondary"} sx={{ fontSize: '14px',fontWeight:"600" }} >Sign up</Typography>
                    </Button>
                    <Button variant="contained" color='secondary' sx = {{height: "35px",mr:"5%"}}>
                        <NavLink to="/log-in" style={{ textDecoration: 'none' }}>
                        <Typography variant='button' color={"primary"} sx={{ fontSize: '14px',fontWeight:"600" }} >Log in</Typography>
                        </NavLink>
                    </Button>
                </Grid>
            </Grid>
            
        </React.Fragment>
    )
}