import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'

export const metadata = {
    title: 'AMARIA - Traditional Lebanese Food Stand',
    description: `Explore the rich flavors of Lebanon at AMARIA. Our food stand crafts tradition with a modern twist, empowering women through flavor transformations. Indulge in creamy labneh, premium olives, and more.`,
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
