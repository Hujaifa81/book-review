import React from 'react';
import { MdOutlineStarBorder } from "react-icons/md";
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    return (
        <div>
            <Link to={`/bookDetails/${book.id}`}>
                <div className="card bg-base-100 shadow-xl p-5">
                    <figure className="px-0 py-5 bg-base-200">
                        <img
                            src={book.book_image}
                            alt="Book cover"
                            className="rounded-xl w-48"
                        />
                    </figure>
                    <div className="items-center text-center mt-3">
                        {/* Changed the inner <p> to <span> */}
                        <div className='flex gap-1 justify-start'>
                            {book.tags.map((t) => (
                                <span key={t} className='bg-base-200 rounded-md px-1 text-green-900'>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <h2 className="card-title mt-2 font-bold">{book.book_name}</h2>
                        <h4 className='text-start mb-4'>
                            By: <span className='font-bold'>{book.author}</span>
                        </h4>
                        <hr />
                        <div className='mx-2 flex justify-between mb-4 mt-2'>
                            <p>{book.genre}</p>
                            <div className='flex justify-center items-center'>
                                <p>{book.rating}</p>
                                <MdOutlineStarBorder />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;
