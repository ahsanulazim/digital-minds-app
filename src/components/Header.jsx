import { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, NavLink } from 'react-router';

const Header = () => {

    const [isFixed, setIsFixed] = useState(false);

    // Scroll handler
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) { // 100px scroll er por fixed hobe
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const nav = <>
        <li><NavLink to="/digital-minds-app">Home</NavLink></li>
        <li><a>Product</a></li>
        <li><a>Pricing</a></li>
        <li><a>Contact</a></li></>

    return (
        <>
            <div className={`drawer ${isFixed ? 'fixed top-0 left-0 w-full bg-white z-1' : 'static'}`}>
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <header className="navbar max-w-[1050px] mx-auto">
                        <div className="navbar-start">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-6 w-6 stroke-current">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </label>
                            </div>
                            {/* <div className="mx-2 flex-1 px-2">Navbar Title</div> */}
                            <NavLink to="/digital-minds-app" className="text-md lg:text-xl font-bold">Digital Minds</NavLink>
                        </div>
                        <div className="hidden navbar-center lg:flex">
                            <ul className="menu menu-horizontal px-1 font-bold text-zinc-500">
                                {/* Navbar menu content here */}
                                {nav}
                            </ul>
                        </div>
                        <div className="navbar-end gap-x-4 lg:gap-x-8">

                            <Link to="/login"><button className="btn btn-sm lg:btn-md bg-main border-0 text-white">Login <IoIosArrowForward className='text-md md:text-lg' /></button></Link>

                        </div>
                    </header>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        {nav}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;