"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = `Amaria is a brand owned by a licensed dietitian.
Project Amaria’s aim was to apply the raw materials and active ingredients directly to the skin, hair and nails while observing the results of doing so when we, as Dietitians, recommend food containing those ingredients to maintain our body from within and without.

We started by one product, and  a lot of success stories proved our vision, and we began to produce new products every now and then.

One of our biggest success stories happened with my own daughter, who had suffered a lot ever since her childhood, from dry skin problems and tried tons of chemical medications but with no luck. Then we decided to resort mother nature, which had the key!

Being owned by a woman, Amaria guarantees the mesmerizing results anyone can ever get!

Although Amaria has launched in the midst of Lebanon’s crisis and tough situations but it has made its way up to the top and we promise to keep going our way making the best natural products which our beautiful customers deserve.`
const Index = () => {
  return (
    <Container maxWidth='lg' className='' sx={{mx:'auto',mt:22,py:4}}>
           <Typography component='h1' sx={{mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            Our Story
        </Typography>
        <Box sx={{width:'100%',height:'200px'}}>
            <img src="https://ucarecdn.com/bf3ec202-9afa-4128-a5ee-d6963a5ad711/ovalogo.PNG" alt="" className="img contain" />
        </Box>
    
        <Box sx={{my:4}}>
                {
                    text?.split('\n\n').map(i=>{
                            return <Typography key={i} sx={{maxWidth:'md',py:1}} className='auto text-center'>{i}</Typography>
                    })
                } 
        </Box>
        {/* <Divider></Divider>
        <Typography sx={{pt:4, mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            Frequently Asked Questions
        </Typography>
            <FAQ/> */}
    </Container>
  )
}

export default Index