import React from 'react';
import HotelItem from '../HotelItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from '../NextArrow';
import BackArrow from '../BackArrow';
import PropTypes from 'prop-types';


const AvailableHotels = (props) => {  

  const settings = props.hotelData.length > 4 
  ? {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <BackArrow />,
    nextArrow: <NextArrow />,
  }
  : {
    slidesToShow: props.hotelData.length,
    prevArrow: null,
    nextArrow: null,
  }
  
  return (
      <>
        <section className="available-hotels col-md-12" id="avalableHotels">
            <h1 className="available-hotels-title section-title col-md-12">Available hotels</h1>
            <Slider {...settings}>
                {props.hotelData.map((item) => (
                <HotelItem 
                    key = {item.name}
                    data = {item}/>)
                )}
            </Slider>
        </section>
      </>
  );
}

AvailableHotels.propTypes = {
    hotelData: PropTypes.array.isRequired,
}

export default AvailableHotels;
