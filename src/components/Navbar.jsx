import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { Link, useDisclosure } from '@chakra-ui/react';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mb-7">
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">MyApp</span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
            onClick={onToggle}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full ${isOpen || !isMobile ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
          <div className={`text-sm ${isMobile ? 'block' : 'flex'} lg:flex-grow`}>
            <div className={`${isMobile ? '' : 'flex justify-end'}`}>
              <Link as={NextLink} href="/" passHref={true} legacyBehavior={true}>
                <a className={`block ${isMobile ? 'my-2' : 'mt-4 lg:inline-block lg:mt-0'} text-white hover:text-white mr-4`}>
                  Home
                </a>
              </Link>
              <Link as={NextLink} href="/about" passHref={true} legacyBehavior={true}>
                <a className={`block ${isMobile ? 'my-2' : 'mt-4 lg:inline-block lg:mt-0'} text-white hover:text-white mr-4`}>
                  Projects
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;