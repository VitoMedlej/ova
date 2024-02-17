"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';

import useLanguage from '@/Hooks/useLanguage';
import Btn from '../Btn/Btn';



const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
        {
            img : 'https://helwe.com/cdn/shop/files/HELWE1125_1500x.jpg?v=1694639701',
            position:'top',
        },
      {
        img: 'https://helwe.com/cdn/shop/files/1_e0850903-aa85-4de4-b1bb-760310fd7813_1200x.png?v=1688387749',
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
            maxHeight:{sm:'100%',md:'600px',lg:'100vh'},
            margin: '0 auto',
         
            height : {xs:'100vh',sm:'600px',md:'100vh'},
             
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
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
                                height: '100%',
                            width:'100%'
                        }}>
                        <Container className='   absolute ' 
                        
                        
                        sx={{
                            background: '#ffffffed',

                            right:{xs:'',lg:'50%'},
                            top:{xs:'60%',md:'60%'},
                        }} maxWidth='sm' disableGutters>
                            
                            <Box 
                            className='  '
                            sx={{
                                top:'50%',
                                background: '#ffffffed',
                                width:{xs:'auto',sm:'400px',md:'450px'},
                                // maxWidth:'850px',
                                mx: {xs:1},
                                px:3,
                                py:3,
                                borderRadius:'8px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                <Typography 
                                className=''
                                
                                sx={{
                                 maxWidth:'600px',
                                  
                                  color:'black',fontSize:{xs:'1.2em',
                                  textTransform:'uppercase',
                                sm:'1.2em',md:'1.165em',lg:'1.5em'},fontWeight:'900'}}>
                             
                             luxurious range of natural, organic, and handmade skin treats.
                                </Typography>
                                <Typography 
                                className=' '
                                sx={{color:'black',fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'600px'}}>
                                  Indulge in our collection of skincare essentials, including rejuvenating facial serums, nourishing body butters, and more.

                                </Typography>
                                <Box className="flex ">

                                <Btn
                                onClick={()=>redir()}
                                
                                className='   ' sx={{mx:'0',mt:1}}>
                                Browse Collection

                                </Btn>
                            
                                </Box>
                            </Box>
                            </Container>
                            <img
            
                                className={`img   
                                
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