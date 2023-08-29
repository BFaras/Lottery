import {
  Button,
  Grid,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

interface UserCart {
  UserId: string;
  Username: string;
  Password: string;
  DateOfBirth: string; // Change DateOfBirth type to Date | null
  Age: number;
  Email: string;
  CartNumber: number;
}

const MAX_CART_NUMBER = 99999999;

export function SignUpDialog() {
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string | null;
  }>({
    Email: null,
    Password: null,
    Username: null,
    DateOfBirth:null
  });

  const [newUserCart, setUserCart] = useState<UserCart>({
    UserId: uuidv4(),
    Username: "",
    Password: "",
    DateOfBirth: "", // Initialize DateOfBirth as null
    Age: 0,
    Email: "",
    CartNumber: Math.floor(Math.random() * MAX_CART_NUMBER),
  } as UserCart);

  function _checkInput(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    label: string
  ) {
    const value = event.target.value;
    const error = validationFunctions[label](value);

    setValidationErrors({ ...validationErrors, [label]: error });

    if (!error) {
      _updateForm(value, label);
    }
  }

  function _updateForm(value: string | number, label: string) {
    console.log(value,label)
    setUserCart((prevUserCart) => ({
        ...prevUserCart,
        [label]: value,
      }));
  }

  const validationFunctions: {
    [key: string]: (value: string) => string | null;
  } = {
    Email: (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email)
        ? null
        : "Email is not valid, it needs to include '@' and '.'";
    },
    Password: (password) => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{12,}$/;
      return passwordRegex.test(password)
        ? null
        : "Password should be 12 characters long and should contain both letters and numbers";
    },
    Username: (username) => {
      return username.length >= 5
        ? null
        : "Username should be at least 5 characters long";
    },
    Age: (age) => {
        return Number(age) >= 18
          ? null
          : "User should be at least 18 years old";
      },
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const today = new Date();
      const birthDate = new Date(date);
      let age = today.getFullYear() - birthDate.getFullYear();

      if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
          today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      const error = validationFunctions["Age"](age.toString());

      setValidationErrors({ ...validationErrors, ["Age"]: error });
  
      if (!error) {
        _updateForm(age.toString(), "Age");
        _updateForm(date.toISOString(), "DateOfBirth");
      }
    }
  };

  React.useEffect(()=>{
     console.log(newUserCart)
  },[newUserCart])


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
        variant="h3"
        color={"#181938"}
        sx={{ fontSize: "30px", marginTop: "5%" }}
      >
        {" "}
        Sign Up
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
          required
          variant="outlined"
          onChange={(event) => _checkInput(event, "Username")}
          helperText={validationErrors.Username}
        />
        <TextField
          label="Email"
          required
          variant="outlined"
          onChange={(event) => _checkInput(event, "Email")}
          sx={{ marginTop: "1rem" }}
          helperText={validationErrors.Email}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateField"]}>
            <DateField
             label="Basic date field" 
             onChange={handleDateChange}/>
          </DemoContainer>
        </LocalizationProvider>
        <TextField
          label="Password"
          required
          variant="outlined"
          type="password"
          onChange={(event) => _checkInput(event, "Password")}
          sx={{ marginTop: "1rem" }}
          helperText={validationErrors.Password}
        />
      </Grid>
      <NavLink
        to={
          newUserCart.Password === "" ||
          newUserCart.Username === "" ||
          newUserCart.Email === "" || newUserCart.Age
            ? "#"
            : "/"
        }
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: "20%", ml: "1vw" }}
          disabled={
            newUserCart.Password === "" ||
            newUserCart.Username === "" ||
            newUserCart.Email === "" || newUserCart.Age === 0
          }
        >
          <Typography
            variant="button"
            color="primary"
            sx={{ fontSize: "14px", fontWeight: "600" }}
          >
            Sign up
          </Typography>
        </Button>
      </NavLink>
    </Grid>
  );
}
