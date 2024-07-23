/* eslint-disable no-unused-vars */
import React from 'react'
import FavBookImg from '../assets/favoritebook.jpg';
import { Link } from 'react-router-dom';


const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
        <img src={FavBookImg} alt='' className='rounded md:w-10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-600 hover:text-red-800'> Book Here!</span>
            </h2>
            <p className='mb-10 text-lg md:w-5/6 hover:text-green-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo, unde iure sequi rem modi velit veniam odit aliquam odio voluptate, saepe tenetur quia? Laudantium quidem nam laboriosam sapiente delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic soluta totam minus voluptatibus ab sequi nesciunt, beatae mollitia quos laboriosam nobis quis ducimus saepe reprehenderit praesentium sunt cumque dignissimos numquam!
            </p>
               {/* My Stats Div */}
      <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
      <div>
      <h3 className='text-3xl font-bold'>1000+</h3>
      <p className='text-base'>Book Listing</p>
      </div>
      <div>
      <h3 className='text-3xl font-bold'>800+</h3>
      <p className='text-base'>Registered Users</p>
      </div>
      <div>
      <h3 className='text-3xl font-bold'>1500+</h3>
      <p className='text-base'>PDF Downloads</p>
      </div>
       
       
      </div>
      <Link to ="/shop" className='mt-12 block'><button className='bg-blue-800 text-white font-semibold px-5 py-2 rounded hover:bg-red-900 transition-all duration-300'>Explore More.</button></Link>
      </div>
        </div>
     

  )
}

export default FavBook
