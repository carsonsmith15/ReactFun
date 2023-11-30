import React from 'react'
import  Button  from '@mui/material/Button'

const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
  console.log(event.target);
  console.log(text);
};

function ButtonComponent() {
  return (
    <div>
      <Button 
        variant='contained'
        
        onClick={(e) => handleClick(e, "clicked")}>Hello .World</Button>
    </div>
  )
}

export default ButtonComponent