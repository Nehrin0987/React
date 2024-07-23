import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import './First.css'

const First = () => {
  return (
    <>
     <AppBar position="static">
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      </IconButton>
      <Typography variant="h6" color="inherit" component="div">
        Photos
      </Typography>
    </Toolbar>
  </AppBar></>
   
  )
}

export default First
