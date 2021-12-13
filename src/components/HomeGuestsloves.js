import React from 'react';
import HotelItem from './HotelItem';
import hotelData from '../constants/HotelsData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/HomeGuestsLoves.css';

function HomeGuestsloves() {  

  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  
  return (
      <Slider {...settings}>
        {hotelData.map((item) => (
          <HotelItem 
              key = {item.name}
              data = {item}/>)
          )}
      </Slider>
  );
}

export default HomeGuestsloves;

