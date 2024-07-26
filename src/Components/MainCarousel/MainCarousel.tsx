"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';

import Btn from '../Btn/Btn';



const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
        {
            img: `https://ucarecdn.com/1deda759-6d5f-4999-b394-27bf3fbd85af/mm2.jpg`
        },
        {
            img: `https://ucarecdn.com/ecc189e8-0484-47a1-bc4c-55a2fc094f4c/mm8.jpg`
        },
        {
            img: `https://ucarecdn.com/7516192a-e6b7-4c6d-bee0-baa0f2540e02/mm9.jpg`
        },
    {
        img: `https://ucarecdn.com/5546c7dd-2df1-4786-903f-2d24a616372a/mm4.jpg`
    },
    {
        img: `https://ucarecdn.com/bb0cf00f-f354-4dbf-beda-13f68197db9c/mm3.jpg`
    },
    {
        img: `https://ucarecdn.com/5141fd15-a0b6-49ce-9383-8a99270c0d85/mm6.jpg`
    },
    {
        img: `https://ucarecdn.com/7c227b6c-5aa7-43fd-a3df-e38fefb6a4f9/mm7.jpg`
    },
   {
        img: `https://ucarecdn.com/173ac323-8645-43f4-8079-0f8a0612f764/mm1.jpg`
    },
      {
        img: 'https://images.pexels.com/photos/269583/pexels-photo-269583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        position:'',
    }
     ])
     const redir = () => {
        router.push('/collection/products')
        // console.log('abc')
     }
    useEffect(() => {
        console.log('res: ', res);
    if (res  && res?.length > 0) {
        console.log('res?.MainCarousel: ', res);
        // console.log('res: ', );
        setImgs(res)
    }
    }, [])
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            transform:'translateY(-1px)',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:{xs:'500px',sm:'500px',lg:'600px'},
            maxHeight:{sm:'80vh',md:'600px',lg:'80vh'},
            margin: '0 auto',
         
            height : {xs:'80vh',sm:'600px',md:'80vh'},
             
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            speed={1200}
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={false}
                autoplay={{
                delay: 4000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={item.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '80vh',
                            width:'100%'
                        }}>
                        <Container className='   absolute ' 
                        
                        
                        sx={{
                            background: '#ffffffed',
                            transform:'translateY(-70%)',
                            top:{xs:'65%',sm:'70%'},

                          
                        }} maxWidth='sm' disableGutters>
                            
                            <Box 
                            className='  '
                            sx={{
                                background: '#ffffffed',
                                mx: {xs:1},
                                px:3,
                                py:3,
                                borderRadius:'0px',
                                zIndex:123456,
                                position:'absolute'}}>
                                <Typography 
                                className=''
                                
                                sx={{
                                 maxWidth:'600px',
                                  
                                  color:'black',fontSize:{xs:'1em',
                                  textTransform:'uppercase',
                                sm:'1.2em',md:'1.165em',lg:'1.5em'},fontWeight:'500'}}>
                             
                             Achieve a Radiant Glow with OVA Skincare
                                </Typography>
                                {/* <Typography 
                                className=' '
                                sx={{color:'black',fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'600px'}}>
                                  Indulge in our collection of skincare essentials, including rejuvenating facial serums, nourishing body butters, and more.

                                </Typography> */}
                                <Box className="flex ">

                                <Btn
                                onClick={()=>redir()}
                                
                                className='   ' sx={{mx:'0',mt:1}}>
                                Shop Now

                                </Btn>
                            
                                </Box>
                            </Box>
                            </Container>
                            <img
            
                                className={`img cover   
                                
                                ${item?.position}d`}
                                // ${item?.className}
                                src={`${item.img} `}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3