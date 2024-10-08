"use client"
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Autoplay, Pagination} from "swiper";
import 'swiper/css';
import {Box} from '@mui/material';
import ProductCard from '@/Components/ProductCard/ProductCard';
import {IProduct} from '@/Types/Types';

const SwiperCarousel = ({data, delay} : {
    data: IProduct[],
    delay?: number
}) => {

    return (
        <Box
            sx={{
            py: {
                xs: '.5em',
                sm: '2em'
            },
            width: '100%',
            maxWidth: 'lg',
            // margin: '0em auto',
            display: {
                xs: 'flex'
            },
            height: '100%'
        }}>
  <Swiper
            pagination={{
                clickable: true,
              }}
             
              autoplay={{
                delay:  delay || 4000,
                disableOnInteraction: true,
              }}
              speed={1200}
              navigation={false}
            spaceBetween={10}
            slidesPerView={2}
            slidesPerGroup={2}
            modules={[FreeMode,Autoplay, Pagination]}
            breakpoints={{
                200 : {
                    slidesPerView:1,
                },
                640: {
                    slidesPerView: 2,
                  },
                  
                  1024: {
                    slidesPerView: 2,
                  },
                  1640: {
                    slidesPerView: 2,
                  },
                
               
        }}
        
        >

                {data && data.length > 0 && data.map((item : any) => {
                    if (!item._id) 
                        return
                    return <SwiperSlide
                        style={{
                        marginRight: '0 !important'
                    }}
                        key={item._id}>
                        <ProductCard
                        sizes={item?.sizes}
                newPrice={item?.newPrice}

                        inStock={item?.inStock}
                            title={item.title}
                            images={item.images}
                            price={item.price}
                            _id={item._id}
                            category={item.category}/>
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

    );
};

export default SwiperCarousel