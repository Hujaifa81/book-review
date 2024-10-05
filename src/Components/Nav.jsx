import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-lg px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to="/listedBooks">Listed Books</NavLink></li>
                            <li><NavLink to='/pagesRead'>Pages to Read</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-green-900 font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><NavLink to='/' className={({isActive})=>isActive?'text-green-900 border':''}>Home</NavLink></li>
                        <li><NavLink to="/listedBooks" className={({isActive})=>isActive?'text-green-900 border':''}>Listed Books</NavLink></li>
                        <li><NavLink to='/pagesRead' className={({isActive})=>isActive?'text-green-900 border':''}>Pages to Read</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <NavLink to='/' className="btn">Sign In</NavLink>
                    <NavLink to='/' className="btn">Sign Up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;