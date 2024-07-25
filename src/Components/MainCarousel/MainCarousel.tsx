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
            img : 'https://ucarecdn.com/992b1682-7acb-4d1a-bbe3-6cd86a374882/ovapic.jpg',
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
                                  
                                  color:'black',fontSize:{xs:'1.2em',
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