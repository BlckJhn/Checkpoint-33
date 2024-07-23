import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/all-books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center text-blue-900 hover:text-black'>All Books are <span className='hover:text-amber-700'>here!</span></h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>

        {
        books.map(book => 
          <Card key={book.id}>  {/* Added key prop */}
            <img src={book.imageUrl} alt='' className='h-96 w-full object-contain'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p className="font-bold text-gray-700 dark:text-gray-400 mt-2 text-center">
              {/* You can add book description here if available */}
              {book.bookTitle}
            </p>
             </h5>
             <p className='font-normal text-gray-700 dark:text-gray-400 mt-2'>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora magni inventore ad quis sequi quas,
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, reiciendis! 
              </p>
             </p>
             <button className='bg-blue-800 font-semibold text-white mt-3 py-2 rounded'>
                  Buy Now!
             </button>
           
          </Card>
        )}
      </div>
    </div>
  );
};

export default Shop;
