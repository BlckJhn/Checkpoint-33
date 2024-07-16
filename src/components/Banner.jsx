import React from 'react';
import BannerCard from '../Home/BannerCard';

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-400 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* Left Side */}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-white hover:text-red-700'>
            Buy and Sell Your Books <span className='text-blue-700 hover:text-black'>for the Best Prices</span>
          </h2>
          <p className='md:w-4/5 hover:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dicta? Aliquam beatae eum cupiditate sit quos tempore, voluptates enim fugiat? Quas, voluptas exercitationem minus eaque sint earum harum repudiandae atque.
          </p>
          <div>
            <input type='search' placeholder="Search a book" name='search' id='search' className='py-2 px-2 rounded-sm outline-none'/>
            <button className='py-2 px-6 bg-blue-700 text-white font-medium hover:bg-red-700 transition-all ease-in duration-200'>Search</button>
          </div>
        </div>

        {/* Right Side */}
        <div className='display-hidden'>
          <BannerCard />
        </div>
      </div>
    </div>
  );
}

export default Banner;
