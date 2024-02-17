import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'Amaria Organic Beauty: Natural, Handmade Skin Treats | Wholesale & Retail in Lebanon',
    description: `Discover Amaria Organic Beauty, your destination for natural, organic, and handmade skin treats in Lebanon. Our licensed team of dietitians, aromatherapists, and herbalists craft premium beauty products. `,
    icons: {
        icon: `https://ucarecdn.com/7160c31d-7e4a-4ad4-a132-5c893ec4a84d/WhatsAppImage20240131at1519322.jpeg`
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
