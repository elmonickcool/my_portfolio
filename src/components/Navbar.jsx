import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { Link, useDisclosure } from '@chakra-ui/react';
import DarkModeSwitch from "../components/ui/DarkModeSwitch";
import { useRouter } from 'next/router';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const isActive = (route) => {
    return router.pathname === route;
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mb-7">
      <div className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 mr-6 flex-grow">
          <Link as={NextLink} href="/" passHref={true} legacyBehavior={true}>
            <a>
              <span className="font-semibold text-xl tracking-tight">Elmo Nickol</span>
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded  border-white hover:text-white hover:border-white"
            onClick={onToggle}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full ${isOpen || !isMobile ? 'block' : 'hidden'} flex items-center w-auto flex-grow`}>
          <div className={`text-sm ${isMobile ? 'block' : 'flex'} justify-center`}>
            <div className="flex justify-center">
              <Link as={NextLink} href="/projects" passHref={true} legacyBehavior={true}>
                <a className={`block text-xl mr-4 ${isActive('/projects') ? 'font-bold' : 'font-medium'}`}>
                  Projects
                </a>
              </Link>
              <Link as={NextLink} href="/about" passHref={true} legacyBehavior={true}>
                <a className={`block text-xl mr-4 ${isActive('/about') ? 'font-bold' : 'font-medium'}`}>
                  About
                </a>
              </Link>
              <Link as={NextLink} href="/contact" passHref={true} legacyBehavior={true}>
                <a className={`block text-xl mr-4 ${isActive('/contact') ? 'font-bold' : 'font-medium'}`}>
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
        <DarkModeSwitch className="flex-grow"/>
      </div>
    </div>
  );
};

export default Navbar;
