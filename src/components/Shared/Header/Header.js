import React, { useState } from 'react';

const Header = () => {
    const [navScroll, setNavScroll] = useState(false);

    // Nav backgoround change on scroll 
    const setNavBg = () => {
        if(window.scrollY >= 100) {
            setNavScroll(true);
        }
        else{
            setNavScroll(false);
        }
    }
    window.addEventListener("scroll", setNavBg);

    return (
        <header className={`sticky top-0 font-semibold ${navScroll ? 'bg-base-100 shadow-xl' : 'bg-transparent text-white border-b border-b-gray-600'}`}>
            <div class="container mx-auto navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary text-white rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Skills</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-3xl">HABIB</a>
                </div>

                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;