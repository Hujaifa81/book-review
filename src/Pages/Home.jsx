import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Components/Hero';
import BookCard from '../Components/BookCard';

const Home = () => {
    const loadedBooks = useLoaderData();
    const [books, setBooks] = useState(loadedBooks); 
    
    useEffect(() => {
        
            
            fetch('/books.JSON')
                .then((response) => response.json())
                .then((data) => setBooks(data)) 
                
        
    }, []);

    if (!Array.isArray(books) || books.length === 0) {
        return <p>Loading books or something went wrong!</p>; 
    }

    return (
        <div className='max-w-5xl mx-auto'>
            <div className='bg-base-200'>
                <Hero books={books} />
            </div>
            <h1 className='text-6xl font-bold text-center my-4'>Books</h1>
            <div className='grid grid-cols-3 gap-4'>
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Home;
