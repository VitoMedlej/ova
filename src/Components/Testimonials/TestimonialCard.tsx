
"use client"

import {Box, Rating, Typography} from '@mui/material'
import React from 'react'

const TestimonialCard = ({title,reviewer,description}:{title:string,reviewer:string,description:string}) => {
    return (
        <Box
        className='auto flex center col '
            sx={{
                background:'white',
                boxShadow:'1px 1px 3px #00000014',
                px:2,
                maxWidth:'500px',
                height:'300px',
                borderBottom: '1px solid white'
        }}>

            <Box className="flex">
            


            </Box>
<Box className='auto w100' sx={{pt:4}}>
<Rating  sx={{mb:.25}} readOnly value={5}></Rating>

</Box>

            <Typography
            // className='clr'
                sx={{
                    // color:'#f8f8f8',
                fontWeight: 300,
                    maxWidth:'500px',
                py: 1.25,
                fontSize: 14
            }}
                component={'p'}>{description}</Typography>
                 {/* <Typography
            className='color2'
                sx={{
                    // color:'#f8f8f8',
                    fontStyle:'italic',
                fontWeight: 400,
                    maxWidth:'300px',
                pb:4,
                pt:1,
                fontSize: 15
            }}
                component={'p'}>-{reviewer}</Typography> */}


        </Box>
    )
}

export default TestimonialCard