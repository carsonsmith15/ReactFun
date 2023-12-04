import React from 'react'

import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import { useNavigate } from "react-router-dom"

const Customer = () => {

    const navigate = useNavigate(); 

    const goToHomePage = () => {
        navigate("/Home")
    };
    
    const gotToMainPage = () => {
        navigate("/")
    };
    
  return (
    <div>

        <Typography variant='h1'>Customer Page</Typography>

        <Button onClick={goToHomePage}>Home Page</Button>
        <Button onClick={gotToMainPage}>Main Page</Button>

    </div>
  )
}

export default Customer