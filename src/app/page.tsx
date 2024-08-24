import PreLoader from '@/Components/PreLoader'
import { Getcategories } from './Utils/Getcategories';
import { Getproducts } from './Utils/Getproducts';
import { Getimages } from './Utils/Getimages';


const Home = async () => {
  // const categoriesData = await Getcategories()
  const productsResponse = await Getproducts()
  const ImagesResponse = await Getimages()
  
  // const categories = categoriesData?.success !== false && categoriesData?.Categories[0]?.cateArray;
  let imagesArray = ImagesResponse.success && ImagesResponse.data && ImagesResponse.data?.Images?.length > 0 && ImagesResponse.data.Images[0].imagesArray.length > 0 ? ImagesResponse.data.Images[0].imagesArray : null;

  return (
    <PreLoader
    categories={null}
    // categories={categories}
    // resImages={null}
    resImages={imagesArray}
    // data={null}
    data={productsResponse?.data?.featuredProducts}
  />
  )
}

export const revalidate = 100
export default Home