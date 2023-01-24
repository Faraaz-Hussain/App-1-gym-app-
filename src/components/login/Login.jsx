import React from "react";
import "./login.css";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

function Login() {
  return (
    <div className="container">
      <div className="image"></div>
      <div className="text-box">
        <TextField  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }} style={{marginLeft:"40px",marginTop:"50px"}} id="outlined-basic" label="username" variant="standard" />
        <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }} style={{marginLeft:"40px",marginTop:"30px"}} id="outlined-basic" label="password" variant="standard" type="password" />
      </div>
    </div>
  );
}

export default Login;
