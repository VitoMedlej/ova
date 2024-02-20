"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {CiShoppingCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';

// import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Button, Container, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
// import {CiSearch,CiShoppingCart} from 'react-icons/ci'
// import {AiOutlineHome,AiOutlineShoppingCart} from 'react-icons/ai'
// import SearchInput from './SearchInput';

import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext, useLangContext } from '@/context/Contexts';
import Btn from '../Btn/Btn';
import useLanguage from '@/Hooks/useLanguage';
import SearchInput from './SearchInput';
import SearchModal from './SearchModal';



export const categories =  [`Craft Supplies`,
`DIY Kits`,
`Artistic Creations`,
`Creative Crafts`,
`Home Decor`];
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
        
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();

    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('2G184N24-JZ094512JIF12412') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])

    return ( <>
     <Box
     id='navy'
    className='center auto   absolute   flex'
        sx={{
            zIndex:12,
            position:'absolute !important',

        flexWrap: 'wrap',
                width:'100%',
                boxShadow:'none',
        background:'transparent',
        border: 'none',
        px:0,
        flexGrow: 1
    }}>
      
        <AppBar
     id='navy2'

    className='center col absolute   flex'

            sx={{
                position:'absolute !important',

                boxShadow:'none',

                background:'transparent',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
        }}>
            <Box className='center text-center bg2' sx={{width:'100%',py:.25}}>
                <Typography className='' component='h1' sx={{color:'#0f0f0f',px:.5,py:.2,fontSize:{xs:'.65em',sm:'.95em'}}}>
                {`Amaria’s Atelier is located in Beirut`} 
                </Typography>
            </Box>
      <Toolbar className='flex relative center items-center' sx={{py:1,px:0,mx:{xs:1},background:'transparent'}}>
        
        <Box
        onClick={()=>router.push('/')}
        className='cursor pointer' sx={{
            position:{xs:'relative',sm:'absolute'},
            right:{xs:'0%',sm:'50%'},
        
        transform:{sm:'translateX(50%)'},width:{xs:'auto',sm:'200px'},height:{xs:'100px',sm:'200px'}}}>
            <img
             src="https://ucarecdn.com/d0533aac-5ae0-4ed5-836f-827bb7428c5a/WhatsApp_Image_20240131_at_151932__1_removebg.png"
             
             
             alt="logo" className="img logo" />
        </Box>



        <Box  sx={{justifyContent:{xs:'flex-end',sm:'space-between'}}} className="flex w100  flex1 ">

      
            <Box
              onClick={()=>setOpenModal(!openModal)}
            
            className='cursor pointer flex center items-center' sx={{width:'20px',padding:1}}>
                <img style={{filter:'invert(0)'}} src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" className="img" />
            </Box>
      

        
      
            <Box 
            onClick={()=>setCartOpen(!cartOpen)}
            
            
            className='cursor pointer flex center items-center' sx={{width:'20px',padding:1}}>
                <img style={{filter:'invert(00)'}} src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png" alt="" className="img" />
            </Box>
        

        <Box className='cursor pointer  center items-center' sx={{width:'20px',padding:1,
                display: {xs:'flex',sm:'none'},
        }}>

        {/* <Link href='/' className='menu-icon'  style={{paddingLeft:'0'}}> */}
            <Box 
            onClick={()=>setOpen(!open)}
            className='cursor pointer  center items-center' sx={{width:'20px',
                display: {xs:'flex',sm:'none'},
            }}>
                <img style={{filter:'invert(0)'}} src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png" alt="" className="img" />
            </Box>
        {/* </Link> */}
            </Box>
        </Box>

        
        <SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
      </Toolbar>
        <NavButtom/>

        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}