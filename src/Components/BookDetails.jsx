import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import { savedItems } from '../utils';

const BookDetails = () => {
    const location=useParams()
    console.log(typeof(location.id));
    const loadedBooks = useLoaderData();
    const [books, setBooks] = useState(loadedBooks); 
    const handleRead=(read,book)=>{
        savedItems(read,book)
    }
    useEffect(() => {
        
            
            fetch('/books.JSON')
                .then((response) => response.json())
                .then((data) => setBooks(data)) // Set the data in state
                
        
    }, []);
    if (!Array.isArray(books) || books.length === 0) {
        return <p>Loading books or something went wrong!</p>; // Fallback UI
    }
    const book=books.find(b=>b.id===parseInt(location.id))
    console.log(book);
    return (
        <div>
            <div className="hero  max-w-5xl mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                <figure className="min-h-28 p-10 bg-base-200 rounded">
                        <img
                            src={book.book_image}
                            alt="Book cover"
                            className="rounded-xl min-w-48 "
                        />
                    </figure>
                    <div className='ml-6'>
                        <h1 className="text-5xl font-bold">{book.book_name}</h1>
                        <p className='text-xl font-semibold my-3'>By:{book.author}</p>
                        <hr />
                        <p className='text-xl font-medium my-3'>{book.genre}</p>
                        <hr className='bg-base-200 bg-opacity-100'/>
                        <p className="py-6">
                            <span className='text-xl font-semibold my-3'>Review</span>:{book.review}
                        </p>
                        <div className='flex gap-1 justify-start mb-4'><span className='text-xl font-bold mr-3'>Tag</span>
                            {book.tags.map((t) => (
                                <span key={t} className='bg-base-200 rounded-md px-1 text-green-900'>
                                    {t}
                                </span>
                            ))}
                        </div>
                        <hr />
                        <div className='my-3'>
                        <p className='my-2'>Number of pages:{book.progress}</p>
                        <p className='my-2'>Publisher:{book.publisher}</p>
                        <p className='my-2'>Year of Publishing:{book.year_of_publishing}</p>
                        <p className='my-2'>Rating:{book.rating}</p>
                        </div>
                        <div className='my-2 flex gap-3'>
                        <button className="btn btn-primary bg-white text-black" onClick={()=>handleRead('read',book)}>Read</button>
                        <button className="btn btn-primary" onClick={()=>handleRead('wish',book)} >Wishlist</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;