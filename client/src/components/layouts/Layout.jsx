import Navbar from './Navbar';
import Footer from './Footer';

// We are making layout because we need header and footer in every page but the middle part should be dynamic that's why we are recieving a children props, so that when we wrap any componet then it actually renders the middle part as dynamic and header and footer part is what we have created

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <main className='bg-[#fafafa] dark:bg-custom-dark dark:text-slate-100'  style={{minHeight: "100vh" }}>
            {children}  
        </main>
        <Footer/>
    </>
  )
}

export default Layout