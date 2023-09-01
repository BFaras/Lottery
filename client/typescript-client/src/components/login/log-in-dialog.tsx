import { gql, useLazyQuery } from '@apollo/client';
import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface UserCart {
  UserId?: string;
  Username: string;
  Password: string;
  DateOfBirth?: string;
  Age?: number;
  Email?: string;
  CartNumber?: number;
}

const useGetAccountQuery = gql`
  query GetUserCart($password: String!, $username: String!) {
    getUserCart(password: $password, username: $username) {
      Age
      CartNumber
      Email
      Password
      DateOfBirth
      UserId
      Username
    }
  }
`;

export function LogInDialog() {
  const navigate = useNavigate();

  const [userCart, setUserCart] = React.useState<UserCart>({
    Username: "mobendt",
    Password: "Farasware123",
  } as UserCart);

  const [login, { loading, error, data, refetch }] = useLazyQuery(
    useGetAccountQuery
  );

  function updateForm(event: any, label: string) {
    setUserCart({ ...userCart, [label]: event.target.value });
  }

  const handleLoginClick = () => {
    login({
      variables: {
        password: userCart.Password,
        username: userCart.Username,
      },
    }).then((result)=>{
        if(result?.data){
            //snackbar success
            navigate("/")
        }
        //snackbar failt

    });
  };

  return (
    <Grid
      item
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fefefe",
        alignItems: "center",
        borderRadius: "12px",
        marginTop: "5%",
        height: "450px",
        width: "400px",
      }}
    >
      <Typography
        variant='h3'
        color={"#181938"}
        sx={{ fontSize: '30px', marginTop: "5%" }}
      >
        Log-in
      </Typography>
      <Grid
        spacing={2}
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10%",
        }}
      >
        <TextField
          label="Username"
          variant="outlined"
          onChange={(event) => updateForm(event, "Username")}
        />
        <TextField
          label="Password"
          variant="outlined"
          sx={{ marginTop: '1rem' }}
          onChange={(event) => updateForm(event, "Password")}
        />
      </Grid>
      <Button
        variant="contained"
        color='secondary'
        sx={{ mt: "20%", ml: "1vw" }}
        onClick={handleLoginClick}
      >
        <Typography
          variant='button'
          color={"primary"}
          sx={{ fontSize: '14px', fontWeight: "600" }}
        >
          Log in
        </Typography>
      </Button>
    </Grid>
  );
}