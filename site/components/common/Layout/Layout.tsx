import cn from 'clsx'
import s from './Layout.module.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Footer from '@components/common/Footer/Footer'
import Navbar from '@components/common/Navbar/Navbar'

interface Props {
    pageProps: {
    //   pages?: Page[]
    //   categories: Category[]
    }
    children?: React.ReactNode
  }
  
  
const Layout: React.FC<Props> = ({
    children,
    // pageProps: { categories = [], ...pageProps },
  }) => {
    // const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
    const { locale = 'en-US' } = useRouter()
    // const navBarlinks = categories.slice(0, 2).map((c) => ({
    //   label: c.name,
    //   href: `/search/${c.slug}`,
    // }))
  
    return (
    //   <CommerceProvider locale={locale}>
        <div className={cn(s.root)}>
          <Navbar/>
          <main className="fit">{children}</main>
          <Footer />
          {/* <ModalUI />
          <CheckoutProvider>
            <SidebarUI links={navBarlinks} />
          </CheckoutProvider> */}
          {/* <FeatureBar
            title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
            hide={acceptedCookies}
            action={
              <Button className="mx-5" onClick={() => onAcceptCookies()}>
                Accept cookies
              </Button>
            }
          /> */}
        </div>
    //   </CommerceProvider>
    )
  }
  
  export default Layout
  