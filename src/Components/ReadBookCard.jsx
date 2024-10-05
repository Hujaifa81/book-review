import React from 'react';
import { Link } from 'react-router-dom';

const ReadBookCard = ({ book }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-5 flex flex-row min-w-full border gap-8">
                <figure className="px-8 py-5 bg-base-200 w-48">
                    <img
                        src={book.book_image}
                        alt="Book cover"
                        className="rounded-xl"
                    />
                </figure>
                <div className="items-center text-center w-full">
                    <h2 className="card-title mb-3 font-bold">{book.book_name}</h2>
                    <h4 className='text-start mb-4'>
                        By: <span className='font-bold'>{book.author}</span>
                    </h4>
                    <div className='flex  justify-start gap-4'>
                       <span className='font-bold'>Tags</span> {book.tags.map((t) => (
                            <span key={t} className='font-bold bg-base-200 rounded-md px-1 text-green-900'>
                                #{t}
                            </span>
                        ))}
                        <div>
                            <p>Year of publishing: {book.year_of_publishing}</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start gap-4 my-3'>
                        <p>Publisher: {book.publisher}</p>
                        <p>Page: {book.progress}</p>
                    </div>

                    <hr className='border-2 bg-base-200' />
                    <div className='mx-0 flex mb-4 mt-2 gap-4'>
                        <p className='bg-blue-300 px-3 py-1 rounded-lg'>Category: {book.genre}</p>
                        <div className='flex justify-center items-center'>
                            <p className='bg-orange-300 rounded-lg px-3 py-1'>Rating: {book.rating}</p>
                        </div>
                        <div>
                            <Link to={`/bookDetails/${book.id}`}><button className='bg-green-400 rounded-lg px-3 py-1'>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBookCard;