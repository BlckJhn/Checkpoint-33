import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// React Icons
import {FaStar} from "react-icons/fa6";
import { Avatar } from "flowbite-react"; 
import proPic from "../assets/profile.jpg";
import proPic1 from "../assets/developer1.png";
import proPic2 from "../assets/developer2.png";
import proPic3 from "../assets/rayan-mill-EvxwJ6ls2vc-unsplash.jpg";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug hover:text-blue-900'> Our Customers</h2>
      <div>
      <Swiper
         slidesPerView={1}
         spaceBetween={30}
         pagination={{
           clickable: true,
         }}
         breakpoints={{
            640:{
                slidesPerView: 1,
                spaceBetween:20,
            },
            768:{
                slidesPerView: 2,
                spaceBetween:20,
            },
            1024:{
                slidesPerView:3 ,
                spaceBetween:20,
            },
         }}
         modules={[Pagination]}
         className="mySwiper"
      >
       
        <SwiperSlide className='shadow-2xl bg:white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                {/* Ratings */}
            <div className='text-amber-500 flex gap-1'>   
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            {/* Text Reviews */}
            <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus qui doloribus autem aliquid accusamus mai , s/dksfkhdores, earum sint minima praesentium assumenda veritatis quasi, in iure voluptas hic nostrum, sit recusandae.</p>
                <Avatar img={proPic} rounded className='w-10 mb-4' alt='avatar of client ' />
                <h5 className='text-lg font-medium'>Sophia Julius</h5>
                <p className='text-base'>CEO, Deepext Mind Company</p>
            </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg:white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                {/* Ratings */}
            <div className='text-amber-500 flex gap-1'>   
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            {/* Text Reviews */}
            <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus qui doloribus autem aliquid accusamus mai , s/dksfkhdores, earum sint minima praesentium assumenda veritatis quasi, in iure voluptas hic nostrum, sit recusandae.</p>
                <Avatar img={proPic1} rounded className='w-10 mb-4' alt='avatar of client ' />
                <h5 className='text-lg font-medium'>John Base</h5>
                <p className='text-base'>CEO, Deepext Freaks Company</p>
            </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg:white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                {/* Ratings */}
            <div className='text-amber-500 flex gap-1'>   
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            {/* Text Reviews */}
            <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus qui doloribus autem aliquid accusamus mai , s/dksfkhdores, earum sint minima praesentium assumenda veritatis quasi, in iure voluptas hic nostrum, sit recusandae.</p>
                <Avatar img={proPic2} rounded className='w-10 mb-4' alt='avatar of client ' />
                <h5 className='text-lg font-medium'>Timothy Canden</h5>
                <p className='text-base'>CEO, Control Company</p>
            </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg:white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                {/* Ratings */}
            <div className='text-amber-500 flex gap-1'>   
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            {/* Text Reviews */}
            <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus qui doloribus autem aliquid accusamus mai , s/dksfkhdores, earum sint minima praesentium assumenda veritatis quasi, in iure voluptas hic nostrum, sit recusandae.</p>
                <Avatar img={proPic3} rounded className='w-10 mb-4' alt='avatar of client ' />
                <h5 className='text-lg font-medium'>Caleb Anthony</h5>
                <p className='text-base'>CEO, Concept Company</p>
            </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg:white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                {/* Ratings */}
            <div className='text-amber-500 flex gap-1'>   
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            {/* Text Reviews */}
            <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus qui doloribus autem aliquid accusamus mai , s/dksfkhdores, earum sint minima praesentium assumenda veritatis quasi, in iure voluptas hic nostrum, sit recusandae.</p>
                <Avatar img={proPic} rounded className='w-10 mb-4' alt='avatar of client ' />
                <h5 className='text-lg font-medium'> Julius Berger</h5>
                <p className='text-base'>CEO,Mind Company</p>
            </div>
            </div>
            
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg:white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                {/* Ratings */}
            <div className='text-amber-500 flex gap-1'>   
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            {/* Text Reviews */}
            <div className='mt-7'>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus qui doloribus autem aliquid accusamus mai , s/dksfkhdores, earum sint minima praesentium assumenda veritatis quasi, in iure voluptas hic nostrum, sit recusandae.</p>
                <Avatar img={proPic2} rounded className='w-10 mb-4' alt='avatar of client ' />
                <h5 className='text-lg font-medium'>Theo Canden</h5>
                <p className='text-base'>CEO, Control Company</p>
            </div>
            </div>
            
        </SwiperSlide>
       
      </Swiper>
      </div>
    </div>
  )
}

export default Review
