"use client"

import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Btn from '../Btn/Btn';
import { useRouter } from 'next/navigation';

const CategoryCard = ({ imageUrl, categoryName } : any) => {
  const router = useRouter()
  return (
    <Card
    sx={{boxShadow:'none',
    width:{xs:'99%',sm:'48%', md:'23%'},
    mt:{xs:0,sm:2},mx:0,borderRadius:'4px',border:'none', maxWidth: {xs:300,sm:280} }}>
      <CardMedia
        component="img"
        height="340"
        width="280"
        sx={{boxShadow:'none',border:'none',borderRadius:'4px',}}
        image={imageUrl}
        alt={categoryName}
      />
      <CardContent sx={{boxShadow:'none',border:'none', borderRadius:'4px',bgcolor: 'transparent' }}>
        <Typography component='h1' gutterBottom className='text-center auto' sx={{pb:1,fontWeight:600,fontSize:'1.2em'}} variant="h1" >
          {categoryName}
        </Typography>
        {/* <Btn
        onClick={()=>router.push('/collection/products')}
        v2 sx={{border:'none',color:'black',textDecoration:'underline',mt:1}}  className='auto'>
          Show More
        </Btn> */}
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
