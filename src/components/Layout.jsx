import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
        <div className='md:container md:mx-auto'>
           {children}
        </div>
      <Footer/>
    </>
  )
}

export default Layout
