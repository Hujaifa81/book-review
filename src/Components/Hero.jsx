import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({books}) => {
    return (
        <div>
            <div className=" py-12">
                <div className="hero-content flex-col lg:flex-row px-[70px] gap-[80px]">
                    <img
                        src={books[0].book_image}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-5xl font-bold ">Books to freshen <br /><span>up your bookshelf</span></h1>
                        <Link to='/listedBooks'><button className="btn bg-green-800 mt-14 ml-9">View the list</button></Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;