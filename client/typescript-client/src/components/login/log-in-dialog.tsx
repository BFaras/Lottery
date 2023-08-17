import { Button, Grid, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


export function LogInDialog() {


    return (
        <Grid item style={{ display: "flex", flexDirection: "column", backgroundColor: "#fefefe", alignItems: "center", borderRadius: "12px", marginTop: "5%", height: "450px", width:  "400px" }}>
            <Typography variant='h3' color={"#181938"} sx={{ fontSize: '30px', marginTop:"5%" }} > Log-in</Typography>
            <Grid
                spacing={2}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10%",
                }}
            >
                <TextField label="Username" variant="outlined" />
                <TextField label="Password" variant="outlined" sx={{ marginTop: '1rem' }} />
            </Grid>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color='secondary' sx={{ mt:"20%",ml:"1vw"}} >
                    <Typography variant='button' color={"primary"} sx={{ fontSize: '14px',fontWeight:"600" }} >Log in</Typography>
            </Button>
            </NavLink>
        </Grid>
    )
}