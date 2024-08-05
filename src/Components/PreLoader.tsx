"use client"
import React from 'react'
import { Box,  Container, Grid, TextField, Typography } from "@mui/material"
// import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
// import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'
import useLanguage from '@/Hooks/useLanguage'
import CategoryCard from './CategoryCard/CategoryCard'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import FullscreenPoster from './FullscreenPoster/FullscreenPoster'

const PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  const {text} = useLanguage()

  

  return (

        <Box >
      <MainCarousel res={resImages} />
      <Grid className='center auto' sx={{px:{xs:1},py:{xs:8},maxWidth:'lg'}}>
        <Typography 
                                className=''
                                
                                sx={{
                                 maxWidth:'600px',
                                  
                                  color:'black',fontSize:{xs:'1.2em',
                                sm:'1.4em',md:'1.565em',lg:'2em'},fontWeight:'500'}}>
                             
                             About Ova Skin Care
                                </Typography>
                                <Typography 
                                className=' '
                                sx={{color:'black',fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'800px'}}>
                       {` At OVA Skin Care, we are dedicated to celebrating natural beauty through the finest skincare products. Founded in Lebanon, our brand is inspired by the rich heritage and natural resources of the Mediterranean.`}

                                </Typography>
                           
        </Grid>

    
      <HomeProductsCarousel  data={data} Collectiontitle={''} delay={0}/>

      <Perks/>
      

      <Container className='flex col ' sx={{
        px:0,
        my:{xs:8,sm:12}}} maxWidth='lg'>

<Typography 
                                className='text-center auto center'
                                
                                sx={{
                                 maxWidth:'600px',
                                    px:1,
                                  color:'black',fontSize:{xs:'1.2em',
                                sm:'1.4em',md:'1.565em',lg:'2em'},fontWeight:'500'}}>

The Benefits of OVA Skin Care Products
                                </Typography>
                                <Typography 
                                className='text-center auto center'
                                sx={{color:'black',fontSize:{xs:'.85em',sm:'.87em'},mt:1,px:1,maxWidth:'800px'}}>
                          {`Our lab-made products, crafted by Dr. Ramy, offer therapeutic, organic, and natural solutions. This dermatologist-approved collection deeply nourishes, protects, and revitalizes your skin.`}

                                </Typography>

                                <Container className='flex row wrap  ' sx={{
        justifyContent:{xs:'center',sm:'justify-between'},
        mt:2}} maxWidth='lg'>
          
      {
        [{
          img:`https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwbfc85467/images/large/Deep-Hydration-Face-Cream/Restage-DeepHydrationFaceCream/LizzyApply.jpg?sw=2000&sh=2000&sm=fit`,
          title:'Deep Hydration'
        },
        {
          img:`https://ucarecdn.com/80e040ce-31db-49e7-8919-c5a7de503792/447768081_17906154572975697_2705445780309916146_n.jpg`,
          title:'Even Tan'
        },
        {
          img:`https://ucarecdn.com/9d7e4ddc-928b-4fd1-bfcd-8b49d3980e54/449262677_17908739711975697_3059468006304686201_n.jpg`,
          title:'Packed with vitamins'
        },
        {img:'https://goop-img.com/wp-content/uploads/2022/10/Do-Antioxidants-Really-Boost-Glowing-Skin_TRU576438-1.jpg',
      title:'Delightful Scent'}
      ].map(i=>{
        return <CategoryCard key={i} categoryName={i?.title} imageUrl={i?.img}/>
        
      })
    }
    
    </Container>



    </Container>

      <Grid container sx={{pt:6,maxWidth:'lg',mx:'auto'}}>
        <Grid className='flex items-center' item xs={12} md={5}>
            <Box className='whitebg col flex items-center' sx={{
            
             px:{xs:1,sm:4},py:4,
              borderRadius:'0px',
              transform:{md:'translateX(25%)'},
           }}>
            <Typography
component={'h1'}
    className='sectionTitle   text-center box'
    sx={{
    fontSize: {
        xs: '2em',
    },
    padding:.5,
    fontWeight: '500'
}}>
Unveil Radiant Skin with OVA Lab-Made Formulas
</Typography>
<Typography
component={'p'}
    className='sectionTitle   text-center box'
    sx={{
 
    fontSize: {
        xs: '.8em',
        sm: '1em'
    },
    padding:.5,
    fontWeight: '300'
}}>
{`Our dermatologist-approved formulas provide deep hydration, effective protection, and lasting nourishment. From hyaluronic acid with 24k gold water to specialized serums, OVA ensures your skin stays radiant and healthy. Proudly made in Lebanon.`}
</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box className='auto' sx={{width:'95%',height:{xs:'100%',sm:'500px'}}}>
            <img style={{borderRadius:'0px'}} src="https://www.bp.com/content/dam/bp/country-sites/en_ae/arabia_lubricants/home/technical-services/used-oil-analysis-lab-test.jpg" alt="" className="img" />
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{my:{xs:6,sm:12},maxWidth:'lg',mx:'auto'}}>
      <Grid item xs={12} md={7}>
          <Box className='auto' sx={{width:'95%',height:{xs:'400px',sm:'500px'}}}>
            <img style={{borderRadius:'0px'}} src="https://images.pexels.com/photos/3762873/pexels-photo-3762873.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="img" />
          </Box>
        </Grid>
        
        <Grid className='flex items-center' item xs={12} md={5}>
            <Box className='whitebg col  flex items-center' sx={{
            
             px:{xs:1,sm:4},py:4,
              borderRadius:'0px',
              transform:{md:'translateX(-25%)'},
           }}>
            <Typography
component={'h1'}
    className='sectionTitle   text-center box'
    sx={{
 
    fontSize: {
        xs: '2em',
    },
    padding:.5,
    fontWeight: '500'
}}>
Elevate Your Skincare Routine
</Typography>
<Typography
component={'p'}
    className='sectionTitle   text-center box'
    sx={{
 
    fontSize: {
        xs: '.8em',
        sm: '1em'
    },
    padding:.5,
    fontWeight: '300'
}}>
{`OVA Skin Care delivers a unique blend of organic and natural ingredients that work in harmony to enhance your skin's health. Our products are designed to offer deep hydration, effective protection, and visible rejuvenation.`}
</Typography>
            </Box>
        </Grid>
     
      </Grid>


    
 


    {/* <Grid  sx={{background:'#f9d40100',alignItems:'center',justifyContent:'center',width:'100%',py:8}} container>

    <Grid  maxWidth='lg' item xs={9} md={4}>
      <Box sx={{height:'400px',maxWidth:'350px'}} className='auto'>
        <img src="https://ucarecdn.com/20fdd745-f27d-4fcc-810a-b1579112422f/2nd.jpg" alt="" className="img" />
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
    <Container  className='wrap col center text-center auto flex' sx={{alignItems:'center',px:{sm:1},display:'flex'}}>
     
        <Typography sx={{width:'100%',maxWidth:'500px',
        pt:{xs:2,sm:0},
        fontSize:{xs:'2em',sm:'3em'},
        fontWeight:900}} component='h1' className='color2 center text-center'>
        {text('Taste the Authenticity of Lebanon ', 'مرحبًا في ترو ناتشور بليند')}

        </Typography>
        <Typography sx={{width:'100%',maxWidth:'470px',flex:1,fontSize:{xs:'.8em',sm:'.9em'},fontWeight:300,color:'#4d555e',mt:2}} className='center text-center'>
        {text('At AMARIA, we’re passionate about health and wellness. We believe in the power of nature, and that’s why we’ve created a range of natural supplements to help you live your best life. From ashwagandha to tongkat ali, we’ve got everything you need to feel your best.', 'في ترو ناشور بليند، نحن ملتزمون بالصحة والعافية. نحن نؤمن بقوة الطبيعة، وهذا هو السبب في أننا قمنا بإنشاء مجموعة من المكملات الطبيعية لمساعدتك على عيش حياتك بأفضل طريقة. من الأشواغاندا إلى تونجكات علي، لدينا كل ما تحتاجه لتشعر بأفضل حال.')}

        </Typography>
      
    </Container>

    </Grid>

   
    </Grid> */}


  
    {/* <Box className='flex auto wrap ' sx={{justifyContent:'space-between',width:'100%',maxWidth:'xl'}}>
      {
        resImages?.categoryImage && resImages?.categoryImage.map((img:any)=>{
          return <Box className='cursor' onClick={()=>router.push('/collection/products')} key={img?.img} sx={{minWidth:'200px',my:1,width:{xs:'99%',sm:'49%',md:'48%'}}}>
            <img src={img?.img} alt="Category Image Shop Now" className="img" />
          </Box>
        })
      }
    </Box> */}

     {/* <Box
                className=' text-center auto center box'
     
     sx={{mx:1,width:'100%'}}> */}
{/* 
        
         <Typography
                className='sectionTitle text-center auto center box'
                sx={{
                  py:'.15em',
                  // pt:9,
                  display:'flex',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                flex:1,
                fontWeight: '300'
            }}>
               Explore Categories
            </Typography>
          */}

            {/* <Box className='wrap  space-evenly' sx={{width:'100%',my:3,display:{xs:'flex'}}}> */}

        {/* {cates.map((i:any)=>{
            return <Box

            onClick={()=>router.push(`${i?.category.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
            key={i?.img} className='cursor'
             sx={{borderRadius:'50%',height:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'},
             my:2,width:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'}}}>
                    <img src={i?.img} alt={`${i?.category ,'image'}`} style={{borderRadius:'50%'}} className="img" />
                    <Typography sx={{fontWeight:'500',fontSize:'.65em',textAlign: 'center',px:1}}>
             {i?.category}
            </Typography>
            </Box>

        })} */}

{/* {resImages?.first && <Box

onClick={()=>router.push(`${'circut machines'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
 className='cursor'
 sx={{borderRadius:'50%',height:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'},
 my:2,width:{xs:'48vw',sm:'24vw',md:'24vw',lg:'15vw'}}}>
        <img src={resImages?.first} alt={`Circut Machines Images image`} style={{borderRadius:'2%'}} className="img" />
        <Typography sx={{fontWeight:'500',fontSize:'.65em',textAlign: 'center',px:1}}>
        Circut Machines
</Typography>
</Box>}


{resImages?.second && <Box
  onClick={() => router.push(`${'customizable-blanks'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={`${resImages?.second}`} alt={`Customizable Blanks Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Customizable Blanks
  </Typography>
</Box>}
{resImages?.third && <Box
  onClick={() => router.push(`${'hot-offers'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.third} alt={`Hot Offers Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Hot Offers
  </Typography>
</Box>}
{resImages?.fourth && <Box
  onClick={() => router.push(`${'new-arrivals'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.fourth} alt={`New Arrivals Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    New Arrivals
  </Typography>
</Box>}
{resImages?.fifth && <Box
  onClick={() => router.push(`${'materials'.replace(/ /g, '-').toLocaleLowerCase() || 'collection'}/products`)}
  className='cursor'
  sx={{ borderRadius: '2%', height: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' }, my: 2, width: { xs: '48vw', sm: '24vw', md: '24vw', lg: '15vw' } }}>
  <img src={resImages?.fifth} alt={`Materials Images image`} style={{ borderRadius: '2%' }} className="img" />
  <Typography sx={{ fontWeight: '500', fontSize: '.65em', textAlign: 'center', px: 1 }}>
    Materials
  </Typography>
</Box>} */}


            {/* </Box> */}

     {/* </Box> */}

      <Box/>
    


      {/* <HomeProductCollection  products={data}/> */}


     <Container  className='flex center wrap bg items-center row'
      sx={{py:5,my:8,mx:'auto'}}>
        <Box>
        <Typography 
        sx={{width:'100%',maxWidth:'600px',flex:1,
        fontSize:{xs:'.95em',sm:'1.19em'},fontWeight:300,color:'white',mt:2}} className=''>
            
        {text(`OVA Skin Care brings you a sophisticated range of skincare products that combine the best of organic and natural ingredients. Our brand is dedicated to enhancing your skin’s health and radiance with formulations designed for every skin type.`)}

            </Typography>
        </Box>
        <Box sx={{ width:{xs:'200px',sm:'200px'},height:{xs:'200px',sm:'200px'},my:1}} className='auto rounded'>
          <img src="https://th.bing.com/th/id/OIP.7R2m15k87PZJ4RxKbnL3YAHaEK?rs=1&pid=ImgDetMain" alt="" 
          style={{    objectPosition: 'left'}}
          className="img rounded" />
        </Box>
        </Container>    
    {/* <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(10,18)}/> */}
    {/* <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(18)}/> */}

    {/* <Testimonials/> */}

    
  </Box>
  )
}

export default PreLoader