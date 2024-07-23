import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Import base Swiper styles
import 'swiper/css/effect-cards'; // Import Swiper effect styles
import './BannerCard.css'; // Import local CSS file for BannerCard styling
import { EffectCards } from 'swiper/modules'; // Import Swiper effect module

const BannerCard = () => {
  return (
    <div className='banner z-0'> {/* BannerCard container with custom styling */}
      <Swiper
        effect={'cards'} // Set Swiper effect to 'cards' for card-like transition effect
        grabCursor={true} // Change cursor to pointer on hover
        modules={[EffectCards]} // Enable Swiper effect module
        className="mySwiper" // Custom class for Swiper component
      >
        {/* Swiper slides */}
        <SwiperSlide></SwiperSlide> {/* Placeholder for SwiperSlide content */}
        <SwiperSlide></SwiperSlide> {/* Placeholder for SwiperSlide content */}
        <SwiperSlide></SwiperSlide> {/* Placeholder for SwiperSlide content */}
        <SwiperSlide></SwiperSlide> {/* Placeholder for SwiperSlide content */}
        <SwiperSlide></SwiperSlide> {/* Placeholder for SwiperSlide content */}
      </Swiper>
    </div>
  )
}

export default BannerCard;
