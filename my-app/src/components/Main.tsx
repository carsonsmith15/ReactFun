import React from 'react'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { useNavigate } from 'react-router-dom'

const Main = () => {

    const navigate = useNavigate();

    const goToHomePage = () => { 
  
        // This will navigate to Home component 
        navigate('/Home');  
    }; 

    const goToCustomerPage = () => { 
  
        // This will navigate to Customer component 
        navigate('/Customer');  
    }; 

  return (
    <div>
        <Typography variant='h1'>Welcome to my React Application</Typography> 

        <Stack direction="row" spacing={2}  >
            <Button variant='contained' onClick={goToCustomerPage}> Go to Customer Page</Button>
            <Button variant='contained' onClick={goToHomePage}> Go to Home Page</Button>
        </Stack>   
    </div>
  )
}

export default Main