"use client"
import { Box } from '@mui/material';
import React from 'react'
// import {FaInstagram,FaWhatsapp} from 'react-icons/fa';
// import {BsTiktok} from 'react-icons/bs';


const sm = [
    {
        Icon:'https://cdn-icons-png.flaticon.com/128/174/174855.png',
        href:`${process.env.NEXT_PUBLIC_INSTA}`
    },
    {
      Icon:`https://cdn-icons-png.flaticon.com/128/174/174848.png`,
      href:'https://www.facebook.com/profile.php?id=100091776934601'
    },
    {Icon:'https://cdn-icons-png.flaticon.com/128/15713/15713434.png',href:'https://wa.me/+96171213284'},
  
 ]
const SMicons = ({sx,color}:{color?:string,sx?:any}) => {
  return (
    <Box className='row flex' sx={{zIndex:1234567,...sx}}>

    {sm.map((item)=>{
      return <Box  key={item.href} className='relative  flex center items-center justify-center space-between' sx={{borderRadius:'50%',width:'40px',mx:.35,mt:1,height:'50px'}}>
      <a   style={{width:'80%',height:'80%'}} className='img absolute' href={`${item.href}`} target='_blank' rel={'noneferrer'}>
          
            <img src={item.Icon} alt="" className="img contain " />
         </a>
            </Box>
    })}
    </Box>
  )
}

export default SMicons