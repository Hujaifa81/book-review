import React, { useEffect, useState } from 'react';
import { getItems, sortBy } from '../utils';
import ReadBookCard from './ReadBookCard';
import { useOutletContext } from 'react-router-dom';

const Wishlist = () => {
    const [books,setBooks]=useState([])
    const {sortBooks}=useOutletContext()
   
    useEffect(() => {
        const data = getItems('wish');
        if (sortBooks==='rating') {
            setBooks(sortBy('rating',data));
        } else if (sortBooks==='pages') {
            
            setBooks(sortBy('pages',data));
        }
        else{
            setBooks(sortBy('publish',data));
        }
    }, [sortBooks]);
    return (
        <div className='grid grid-cols-1 gap-4 mx-3'>
            {
                books.map(book=><ReadBookCard book={book} key={book.id} ></ReadBookCard>)
            }
        </div>
    );
};

export default Wishlist;