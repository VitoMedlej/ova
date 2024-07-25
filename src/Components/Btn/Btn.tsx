"use client"
import { Button } from '@mui/material'
import React from 'react'



let style1 = {
  color: 'black',
  background: ' #c9a45d',
  border:'1px solid  #c9a45d',
  borderRadius: '7px', 
  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
      background: '#c9a45d',
      color:'black',
 
  },
  display: 'flex',
  padding: '9px 45px',
  fontWeight: '600',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}
let style2 = {
  color: 'black',
  background: 'transparent',
  border: '1px solid  #c9a45d',
  borderRadius: '7px', 
  // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'background 0.3s ease, transform 0.2s ease',

  ':hover': {
    color:'black',
      background: '#c9a45d',
      transform: 'scale(1.05)',
  },
  display: 'flex',
  padding: '9px 45px',
  fontWeight: '600',
  fontSize: '12px',
  cursor: 'pointer',
  outline: 'none',
}

const Btn = ({v2,disabled,onClick,className,children,sx}:{className?:string,disabled?:boolean,onClick?:()=>any,sx?:any,v2?:boolean,children?:any}) => {
  return (
    <Button
   
    className={`trans ${className ? className : ''}`}
    disabled={disabled || false}
    onClick={onClick &&onClick}
    sx={v2 ? {...style2 , ...sx} : {...style1 , ...sx} }>{children}</Button>
  )
}

export default Btn