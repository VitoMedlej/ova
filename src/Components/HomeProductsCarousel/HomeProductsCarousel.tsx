"use client"
import {Box, Divider, Typography} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import SwiperCarousel from './SwiperCarousel/SwiperCarousel'
import { useRouter } from 'next/navigation'
const ProductCollection = ({sx,delay,Collectiontitle,data,setQuickView} : {
    Collectiontitle: string,
    delay : number,
    data: IProduct[],
    sx ?: any;
    setQuickView ?: Dispatch<SetStateAction<{
        isOpen: boolean;
        productId: null | string;
    }>>
}) => {
    
    const router = useRouter()

    return (
        <Box
            sx={{
            maxWidth: 'lg',
            // width :'99%',
            // margin: '0 auto',
            // my: '3em',
            mt:'2em',
            mb:'3em',
            ...sx,
        }}>
            <Box className="flex justify-between" sx={{width:'100%'}}>

            <Typography
            component='h1'
                className='sectionTitle center auto text-center   box'
                sx={{
             
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                padding:.5,
                fontWeight: '500'
            }}>
             Our Best Sellers
            </Typography>
            
          
            </Box>
            
            <Box
                sx={{
                display: {
                    xs: "flex",
                 
                }
            }}>
                <SwiperCarousel
                delay={delay}
                
                data={data && data.length > 0 && data?.slice(0,25) || []}/>
            </Box>
{/* 
            <Btn
            className='auto'
            sx={{background:'none'}}
            onClick={()=>router.push('/collection/products')}>
                Shop All
            </Btn> */}
   
{/* <Divider  light /> */}
        
                </Box>
                
                )
                
            }

export default ProductCollection