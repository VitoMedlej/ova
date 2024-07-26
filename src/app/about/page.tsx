"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text =  `OVA Skincare is dedicated to natural beauty.

We use 100% natural ingredients for effective skincare solutions.

Our products are lab-made to ensure high quality and safety.

We believe in the power of nature to enhance your skin's health.

Our tanning oil hydrates, protects, and gives you a radiant glow.

Enriched with vitamins, our products support skin regeneration and hydration.

Our lightweight formulas provide a non-greasy finish for all-day comfort.

Available in all pharmacies in Lebanon, OVA Skincare is your go-to for premium skincare.

Experience the benefits of natural ingredients without synthetic additives.`


const Index = () => {
  return (
    <Container maxWidth='lg' className='' sx={{mx:'auto',mt:2,py:4}}>
         
        <Box sx={{width:'100%',height:'200px'}}>
            <img src={`https://ucarecdn.com/bf3ec202-9afa-4128-a5ee-d6963a5ad711/ovalogo.PNG`} alt="" className={`img contain`} />
        </Box>
    
        <Box sx={{my:4}}>
                {
                    text?.split('\n\n').map(i=>{
                            return <Typography key={i} sx={{maxWidth:'md',py:1}} className='auto text-center'>{i}</Typography>
                    })
                } 
        </Box>
        {/* <Divider></Divider>
        <Typography sx={{pt:4, mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className= center text-center>
            Frequently Asked Questions
        </Typography>
            <FAQ/> */}
    </Container>
  )
}

export default Index