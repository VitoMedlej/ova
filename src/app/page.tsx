import PreLoader from '@/Components/PreLoader'
import { Getcategories } from './Utils/Getcategories';
import { Getproducts } from './Utils/Getproducts';


const Home = async () => {
  // const categoriesData = await Getcategories()
  const productsResponse = await Getproducts()
  const ImagesResponse = await Getimages()
  
  // const categories = categoriesData?.success !== false && categoriesData?.Categories[0]?.cateArray;
  const images = ImagesResponse?.success !== false && ImagesResponse?.data?.Images[0]?.imagesArray;

  return (
    <PreLoader
    categories={null}
    // categories={categories}
    // resImages={null}
    resImages={images}
    // data={null}
    data={productsResponse?.data?.featuredProducts}
  />
  )
}

export const revalidate = 0
export default Home