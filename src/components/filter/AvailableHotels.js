import React from 'react';
import HotelItem from '../HotelItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from '../NextArrow';
import BackArrow from '../BackArrow';
import PropTypes from 'prop-types';
import { Link,
  generatePath,
  useHistory } from 'react-router-dom';
//import HotelDetail from '../filter/HotelId/NewHotels'
import { useState,
 } from "react";
import HotelDetail from './HotelId/NewHotels';



const AvailableHotels = (props) => {  

  const [id] = useState();
  const history = useHistory();

  const handleProceed = () => {
  id && history.push(generatePath("https://fe-student-api.herokuapp.com/api/hotels/:id"), {id})
  return (
    <div>
    <HotelDetail/>
    </div>
  )
};
  
  
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
            {props.hotelData.map((item, id) => (
            <div 
              key = {id}
              onClick={handleProceed}>
              <Link to={`/hotels/${item.id}`}> 
            <HotelItem 
                data = {item}/>
                 </Link>
                 </div>)
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