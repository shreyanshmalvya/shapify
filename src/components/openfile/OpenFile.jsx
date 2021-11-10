import React from 'react'
import Box from '@material-ui/core/Box';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const OpenFile = () => {
  return (
    <div className= "">
    <Box 
    border={1}
    borderColor="red"
    height={300}
    width={300}
    display="flex"
    justifyContent="center" 
    alignItems="center"
    bgcolor="white" 
    color="black">
        choose an image to upload
    </Box>
    </div >
  )
}

export default OpenFile