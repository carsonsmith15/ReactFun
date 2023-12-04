import React from 'react'

import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate(); 

    const goToCustomerPage = () => {
        navigate("/Customer")
    };

    const goToMainPage = () => {
        navigate("/")
    };

  return (
    <div>
        <Typography variant='h2'>Home Page</Typography>

        <Button onClick={goToCustomerPage}> Customer Page</Button>
        <Button onClick={goToMainPage}> Main Page</Button>
    </div>
  )
}

export default Home