import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaGrunt, FaXmark } from "react-icons/fa6"; // Importing icons from react-icons

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false); // State to manage menu open/close
    const [isSticky, setIsSticky] = useState(false); // State to manage sticky navbar

    // Toggle Menu
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        // Effect for handling scroll events
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true); // Set navbar sticky when scrolled down
            } else {
                setIsSticky(false); // Remove sticky behavior when scrolled to top
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures effect runs only on mount and unmount

    // Navigation items defined
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ];

    return (
        <div>
            {/* Header section */}
            <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
                {/* Navigation section */}
                <nav className={`py-4 lg:px-24 ${isSticky ? "sticky top-0 left-0 right-0 bg-teal-300":"" }`}>
                    {/* Container for logo and navigation links */}
                    <div className='flex justify-between items-center text-base gap-8'>
                        {/* Logo with link to home */}
                        <Link to="/" className='text-2xl font-bold text-red-700 flex items-center gap-2 hover:text-black '>
                            <FaGrunt className='inline-block' />
                            Chapters Cove.
                        </Link>

                        {/* Navigation links for large screens */}
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path }) => (
                                    <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-red-900'>
                                        {link}
                                    </Link>
                                ))
                            }
                        </ul>

                        {/* Menu button for large screens */}
                        <button className='space-x-12 hidden lg:flex items-center'><FaBarsStaggered className='w-5 hover:text-red-700'/></button>

                        {/* Menu button for mobile screens */}
                        <div className='md:hidden'>
                            <button onClick={toggleMenu} className='text-black focus:outline-none'>
                                {
                                    isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black hover:text-red-700'/>
                                }
                            </button>
                        </div>

                        {/* Menu for mobile screens when menu is open */}
                        <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-900 ${isMenuOpen ? "block fixed top-0 right-0 left-0": "hidden"}`}>
                            {
                                navItems.map(({ link, path }) => (
                                    <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-red-600'>
                                        {link}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
