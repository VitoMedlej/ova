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

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  const {text} = useLanguage()
  const textsArray = [
    {
      id: 1,
      title: text('100% Natural', '100٪ طبيعي'),
      desc: text(
        'Our honey is sourced from the purest natural environments, ensuring 100% natural goodness without any artificial additives or preservatives.',
        'عسلنا يأتي من أجواء طبيعية نقية، مما يضمن لك الخير الطبيعي بنسبة 100٪ دون أي إضافات صناعية أو مواد حافظة.'
      ),
    },
    {
      id: 2,
      title: text('Purity and Potency', 'النقاء والفعالية'),
      desc: text(
        'We carefully select our beehives in pristine locations, ensuring the purity and potency of our honey, so you experience the best benefits.',
        'نحن نختار خلايانا بعناية في أماكن نقية، مما يضمن نقاء وفعالية عسلنا، لتجربة فوائد متميزة.'
      ),
    },
    {
      id: 3,
      title: text('Expertly Formulated', 'صياغة خبيرة'),
      desc: text(
        'Our honey is expertly crafted by our team of experienced beekeepers, ensuring a premium product that delivers superior taste and quality.',
        'تم تصنيع عسلنا بخبرة من قبل فريق من مربي النحل ذوي الخبرة، مما يضمن لك منتجًا ممتازًا يقدم طعمًا وجودة فائقين.'
      ),
    },
    {
      id: 4,
      title: text('Great Value', 'قيمة عظيمة'),
      desc: text(
        'AMARIA honey provides great value for your health, offering the highest quality honey at an affordable price for you and your family.',
        'عسل بي أورجانيك يقدم قيمة عظيمة لصحتك، حيث يوفر عسل عالي الجودة بسعر معقول لك ولعائلتك.'
      ),
    },
  ];
  

  return (
    <Box >
      <MainCarousel res={undefined} />
      <Grid className='center auto' sx={{px:{xs:1,sm:0},py:{xs:8},maxWidth:'lg'}}>
        <Typography 
                                className=''
                                
                                sx={{
                                 maxWidth:'600px',
                                  
                                  color:'black',fontSize:{xs:'1.2em',
                                sm:'1.4em',md:'1.565em',lg:'2em'},fontWeight:'900'}}>
                             
                             Our approach
                                </Typography>
                                <Typography 
                                className=' '
                                sx={{color:'black',fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'800px'}}>
                               We personalize and elaborate a skincare routine for every individual. To maintain a healthy and glowing skin, we recommend you a three-step layering routine with products adapted to your skin type or concern.

                                </Typography>
                                <Btn sx={{mt:1}}>
                                  Learn More
                                </Btn>
        </Grid>
    
      <HomeProductsCarousel  data={data} Collectiontitle={''} delay={0}/>

      

      <Container className='flex col ' sx={{
        px:0,
        my:{xs:8,sm:12}}} maxWidth='lg'>

<Typography 
                                className='text-center auto center'
                                
                                sx={{
                                 maxWidth:'600px',
                                    px:1,
                                  color:'black',fontSize:{xs:'1.2em',
                                sm:'1.4em',md:'1.565em',lg:'2em'},fontWeight:'900'}}>
                             
                             Our products are suitable for each skin
                                </Typography>
                                <Typography 
                                className='text-center auto center'
                                sx={{color:'black',fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'800px'}}>
                           Do you know your skin type? Read more to understand your skin type or contact us for a free consultation with our skin experts.

                                </Typography>


                                <Container className='flex row wrap space-between justify-between ' sx={{
        justifyContent:{xs:'justify-between',sm:'justify-between'},
        mt:2}} maxWidth='lg'>
          
      {
        [{
          img:`https://helwe.com/cdn/shop/files/3_36e07bc7-d063-47e6-966b-62d9140e0007_295x.png?v=1662366307`,
          title:'Dry skin'
        },
        {
          img:`https://helwe.com/cdn/shop/files/2_c7d2e24e-1a0b-4192-a4d1-01a9f6b928b6_295x.png?v=1662366307`,
          title:'Combination Skin'
        },
        {
          img:`https://helwe.com/cdn/shop/files/1_c4b8cd92-2c53-40e8-93f7-163d7f7fd928_295x.png?v=1662366307`,
          title:'Oily Skin'
        },
        {img:'https://helwe.com/cdn/shop/files/4_e2a4d56a-01b1-4e11-bd30-4e710dea7dba_295x.png?v=1662366493',
      title:'Know your skin'}
      ].map(i=>{
        return <CategoryCard key={i} categoryName={i?.title} imageUrl={i?.img}/>
        
      })
    }
    
    </Container>
    </Container>

      <Grid container sx={{maxWidth:'lg',mx:'auto'}}>
        <Grid className='flex items-center' item xs={12} md={5}>
            <Box className='bg2 col flex items-center' sx={{
            
             px:{xs:1,sm:4},py:4,
              borderRadius:'4px',
              transform:{md:'translateX(25%)'},
           }}>
            <Typography
component={'h1'}
    className='sectionTitle   text-center box'
    sx={{
    fontSize: {
        xs: '2em',
        sm: '3em'
    },
    padding:.5,
    fontWeight: '900'
}}>
 Revitalize Your Hair with Amaria
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
Unleash the power of nature with Amarias hair care set. Experience the transformation today!
</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box className='auto' sx={{width:'95%',height:'100%'}}>
            <img style={{borderRadius:'4px'}} src="https://ucarecdn.com/b40a6c28-337e-4ee3-b675-87eb94bbb9cf/413040906_17962573337695373_7471455854767187837_n.jpg" alt="" className="img" />
          </Box>
        </Grid>
      </Grid>

      <Grid container sx={{my:{xs:6,sm:12},maxWidth:'lg',mx:'auto'}}>
      <Grid item xs={12} md={7}>
          <Box className='auto' sx={{width:'95%',height:'100%'}}>
            <img style={{borderRadius:'4px'}} src="https://instagram.fbey22-1.fna.fbcdn.net/v/t39.30808-6/399151310_17953961009695373_8676238376226840435_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyIn0&_nc_ht=instagram.fbey22-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Qp_yd9rwR20AX9axQFh&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzIyOTQ1OTA1MjQ5NTA0NTQ4NA%3D%3D.2-ccb7-5&oh=00_AfACKGhDXDDdui-fZ6lXfGPQhpSvo0Sv16ukVJaD6TYZZg&oe=65C34E47&_nc_sid=b41fef" alt="" className="img" />
          </Box>
        </Grid>
        
        <Grid className='flex items-center' item xs={12} md={5}>
            <Box className=' col bg2 flex items-center' sx={{
            
             px:{xs:1,sm:4},py:4,
              borderRadius:'4px',
              transform:{md:'translateX(-25%)'},
           }}>
            <Typography
component={'h1'}
    className='sectionTitle   text-center box'
    sx={{
 
    fontSize: {
        xs: '2em',
        sm: '3em'
    },
    padding:.5,
    fontWeight: '900'
}}>
 Nourish and Glow Your Hair
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
Feed your hair the nutrition it craves. Our hair serum provides the perfect nourishment for lustrous growth
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


      {/* <Container  className='flex center wrap items-center row' sx={{py:5,my:8,mx:'auto',maxWidth:'lg',background:'#f4f8fd',}}>
        <Box>
        <Typography sx={{width:'100%',maxWidth:'600px',flex:1,fontSize:{xs:'.95em',sm:'1.19em'},fontWeight:300,color:'#4d555e',mt:2}} className=''>
            
        {text('At AMARIA, we’re committed to sustainability. That’s why we use eco-friendly packaging and support sustainable farming practices to ensure that our products have a minimal impact on the environment.', 'في ترو ناشور بليند، نحن ملتزمون بالاستدامة. لهذا السبب نستخدم تعبئة صديقة للبيئة وندعم ممارسات الزراعة المستدامة لضمان أن منتجاتنا لها تأثير أدنى على البيئة.')}

            </Typography>
        </Box>
        
        <Box sx={{ width:{xs:'200px',sm:'200px'},height:{xs:'200px',sm:'200px'},my:1}} className='auto rounded'>
          <img src="https://funmauj.b-cdn.net/test/928368.jpg" alt="" className="img rounded" />
        </Box>
        </Container>        */}
    {/* <FullscreenPoster/> */}
    {/* <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(10,18)}/> */}
    {/* <HomeProductsCarousel Collectiontitle={"Browse Our Collections"} delay={3000} data={data?.featuredProducts?.slice(18)}/> */}

     

    <Testimonials/>

    
  </Box>
  )
}

export default PreLoader