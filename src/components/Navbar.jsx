import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaGrunt, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle Menu
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Navigation items here
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ];

    return (
        <div>
            <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
                <nav className={`py-4 lg:px-24 ${isSticky ? "sticky top-0 left-0 right-0 bg-white":"" }`}>
                    <div className='flex justify-between items-center text-base gap-8'>
                        {/* Logo */}
                        <Link to="/" className='text-2xl font-bold text-red-700 flex items-center gap-2 hover:text-black '>
                            <FaGrunt className='inline-block' />
                            Chapters Cove.
                        </Link>

                        {/* Nav items for Large screen devices */}
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path }) => (
                                    <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-red-900'>
                                        {link}
                                    </Link>
                                ))
                            }
                        </ul>

                        {/* Buttons for Large Screen */}
                        <button className='space-x-12 hidden lg:flex items-center'><FaBarsStaggered className='w-5 hover:text-red-700'/></button>

                        {/* Menu Buttons for Mobile Device Screen  */}
                        <div className='md:hidden'>
                            <button onClick={toggleMenu} className='text-black focus:outline-none'>
                                {
                                    isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black hover:text-red-700'/>
                                }
                            </button>
                        </div>

                        {/* Navigation Items For Smaller Screen Size */}
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
