"use client"

import { Box, Typography } from '@mui/material'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import TestimonialCard from './TestimonialCard';
import { Autoplay } from 'swiper';
import useLanguage from '@/Hooks/useLanguage';
// import { Autoplay, Pagination } from 'swiper/modules';
// import {FreeMode, Autoplay, Pagination} from "swiper";



// const Clients = [
//     {id:1,
//         description:``,
//         name:'Zekra Advertising Specialist',img:'https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png'},
//         {id:2,
//             description:``,
//             name:'',img:'https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png'},
//         {id:3,
//             description:``,
//             name:`Powerhouse’s Owner `,img:'https://ucarecdn.com/3b40bedc-0aa3-4247-a196-fd05de4d4f87/003011.jpg'}

// ]
const reviews = [
  {
      description: "Dear Amaria, just wanted to drop you a line to say thank you for the amazing products. They are beautiful and I particularly like the face oil. It is heavenly and feels really nourishing! Thank you again, Love Mela."
  },
  {
      description: "Hello hello, Just a quick line to say that the rejuvenate products are great and haven't caused a reaction. My daughter says it makes my skin look smoother and less tired! I have only been using it just over a week or so - wonderful results. Have a great weekend!"
  },
  {
      description: "I’m very keen on these amazing products by Conscious Skincare. They not only smell divine, feel gorgeous but have the ingredients that I dream of! No nasties, just pure, thought out, conscious ingredients."
  },
  {
      description: "Hi there! I just wanted to drop you a message because I've been so shocked at how well my skin is reacting to your products! I ordered a couple of sample size products to try as my skin is sensitive & spot prone, and NOTHING has worked this quickly before. Thank you so much for creating your beautiful, natural, organic, environmentally friendly skin care products. I can't wait to order them alllll."
  }
];

const Testimonial = () => {


 
  const {text} = useLanguage()
    
    
  return (
    <Box className=' flex col ' sx={{pt:4,width:'100%',height:'100%'}}>
 <Box className='flex col'  sx={{flex:1,width:'100%',pt:'1.5em'}}>

 <Typography 
                                className='text-center auto center'
                                
                                sx={{
                                 maxWidth:'600px',
                                  
                                  color:'black',fontSize:{xs:'1.2em',
                                sm:'1.4em',md:'1.565em',lg:'2em'},fontWeight:'900'}}>
              {text('Our Customers speak for us', 'عملاؤنا يتحدثون عنا')}

            </Typography>
            </Box>
       <Box
            sx={{
            
         
            margin: '0em auto',
            width: '100%',
            maxWidth: 'lg',
            mb:'6em',
            display: {
                xs: 'flex'
            },
            // height: '100%'
        }}>

            <Swiper
                pagination={{
                clickable: true
            }}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
            
                // navigation={true}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={
 {// when window width is >= 320px
 320: {
    slidesPerView:1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  940: {
    slidesPerView: 3,
    spaceBetween: 20
  }

}

                }
                modules={[ Autoplay]}
              >

                {reviews.map((item ) => {
                    if (!item.description) 
                        return
                    return <SwiperSlide
                        style={{
                        padding:'2em 0',
                        marginRight: '0 !important'
                    }}
                        key={item.description}>
                         <TestimonialCard title={item.description} reviewer={item.description} description={item.description}/>

                    </SwiperSlide>
                    // return <SwiperSlide className='swiper-wrapper1'
                    // style={{width:'100%',height:'100%'}} key={item._id}>     {/* <HouseCard
                    //   img={property.images[0] || property.images[1]}         width='95%'
                    // id={property.id}         isFeatured={isFeatured !== undefined ? isFeatured :
                    // true}         propertySize={property.propertySize}
                    // type={property.type}         baths={property.bathrooms}
                    // rooms={property.rooms}         currency={property.currency}
                    // price={property.price}         title={property.title}
                    // location={property.location}/> */}          <ProductCard
                    // handleQuickView={handleQuickView}          title={item.title}
                    // images={item.images}          price={item.price}          _id={item._id}
                    //     category={item.category}          /> </SwiperSlide>

                })
}

            </Swiper>
        </Box>
    </Box>
  )
}

export default Testimonial