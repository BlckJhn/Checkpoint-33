import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure to import Link
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'; // Import base styles for Swiper
import 'swiper/css/pagination'; // Import pagination styles for Swiper

// Import required modules
import { Pagination } from 'swiper/modules'; // Import Swiper pagination module

import { FaCartShopping } from 'react-icons/fa6'; // Import Cart Shopping icon from React Icons

const BookCard = ({ headline, books }) => {
  console.log(books); // Log the 'books' prop to the console

  return (
    <div>
      {/* Render the headline with specific styles */}
      <h2 className='text-5xl text-center font-bold text-black my-5 hover:text-red-900'>{headline}</h2>

      {/* Render Swiper component for displaying book cards */}
      <div className='mt-12'>
        <Swiper
          slidesPerView={1} // Number of slides per view
          spaceBetween={10} // Space between slides
          pagination={{ clickable: true }} // Enable clickable pagination
          breakpoints={{ // Responsive breakpoints for different screen sizes
            640: { slidesPerView: 2, spaceBetween: 20 }, // Viewport width >= 640px
            768: { slidesPerView: 4, spaceBetween: 40 }, // Viewport width >= 768px
            1024: { slidesPerView: 5, spaceBetween: 50 }, // Viewport width >= 1024px
          }}
          modules={[Pagination]} // Enable Swiper pagination module
          className="mySwiper w-full h-full" // Custom class for Swiper component
        >
          {
            books.map(book => 
              <SwiperSlide key={book._id}>
                {/* Link to the detail page of each book */}
                <Link to={`/books/${book._id}`}>
                  <div className='relative'>
                    {/* Display book image */}
                    <img src={book.imageUrl} alt="" />
                    {/* Display cart shopping icon on hover */}
                    <div className=' absolute top-3 right-3 bg-blue-700 hover:bg-red-900 p-2 rounded'>
                      <FaCartShopping className='w-4 h-4 text-white'/>
                    </div>
                  </div>
                  <div>
                    {/* Display book title */}
                    <h3>{book.bookTitle}</h3>
                    {/* Display book author */}
                    <p>{book.authorName}</p>
                  </div>
                  <div>
                    {/* Display book price */}
                    <p>$500.00</p>
                  </div>
                </Link>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </div>
  );
}

export default BookCard;
