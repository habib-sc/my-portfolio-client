import React from 'react';

const Header = () => {
    return (
        <header className='bg-transparent border-b border-b-gray-600'>
            <div class="container mx-auto navbar text-white">
                {/* <div class="flex-1">
                    <a class="btn btn-ghost normal-case text-3xl">Md. Habibur Rahman</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Contact</a></li>
                    </ul>
                </div> */}


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
                    <a class="btn btn-ghost normal-case text-3xl">Md. Habibur Rahman</a>
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