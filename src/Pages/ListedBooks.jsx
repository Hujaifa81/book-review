import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const ListedBooks = () => {
    const [tabs, setTabs] = useState(0)
    const [sortBooks, setSortBooks] = useState('')

    const handleSort = (value) => {

        setSortBooks(value)

    }
    return (
        <div className='max-w-5xl mx-auto'>
            <h1 className='bg-base-200  min-h-14 flex items-center justify-center rounded my-5 font-bold'>Books</h1>
            <div className='my-2 flex items-center justify-center'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-800">Sort By</div>
                    <ul tabIndex={0} className="hover:cursor-pointer flex justify-center items-center dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleSort('rating')}>Rating</li>
                        <li onClick={() => handleSort('pages')}>Number of Pages</li>
                        <li onClick={() => handleSort('publish')}>Publish Year</li>
                    </ul>
                </div>
            </div>

            {/* tabs */}
            <div className=''>
                <div className="min-w-full mb-3 flex items-center  overflow-x-auto overflow-y-hidden justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800 ">
                    <Link to='' onClick={() => setTabs(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabs === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                    <Link to='wishlist' onClick={() => setTabs(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabs === 1 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </Link>

                </div>

            </div>

            <Outlet context={{ sortBooks }}></Outlet>
        </div>
    );
};

export default ListedBooks;