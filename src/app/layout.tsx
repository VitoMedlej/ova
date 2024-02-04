import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'Amaria: Natural, Organic, and Handmade Beauty Essentials - Body, Hair, Lip, and Facial Care',
    description: `where beauty meets nature. Explore our exquisite range of natural, organic, and handmade skin treats, meticulously crafted by licensed dietitians, aromatherapists, and herbalists. Wholesale and retail options available. Elevate your self-care routine with our Body, Hair, Lip, and Facial Care lines.`,
    icons: {
        icon: `https://ucarecdn.com/d0533aac-5ae0-4ed5-836f-827bb7428c5a/WhatsApp_Image_20240131_at_151932__1_removebg.png`
    }
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet"/>
            </head>

            <body className='relative'>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    <QuickCart/>
                    <ScrollToTop/>
                    <main >

                     {children}
                    </main>
                </ContextWrapper>
                <Footer/>
            </body>
        </html>
    )
}
