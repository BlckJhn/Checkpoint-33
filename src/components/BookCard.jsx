import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure to import Link
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';


import { FaCartShopping } from 'react-icons/fa6'

const BookCard = ({ headline, books }) => {
  console.log(books);
  return (
    <div>
      <h2 className='text-5xl text-center font-bold text-black my-5 hover:text-red-900'>{headline}</h2>

      {/* Cards for the best selling Book */}
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {
            books.map(book => (
              <SwiperSlide key={book._id}>
                <Link to="/">
                  <div className='relative'>
                    <img src={book.imageUrl} alt="" />
                    <div className=' absolute top-3 right-3 bg-blue-700 hover:bg-red-900 p-2 rounded'>
                        <FaCartShopping className='w-4 h-4 text-white'/>
                    </div>
                  </div>
                  <div>
                    <h3>{book.bookTitle}</h3>
                    <p>{book.authorName}</p>
                  </div>
                  <div>
                    <p>$500.00</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
}

export default BookCard;
