import React from 'react';
import PropTypes from 'prop-types';

const HotelItem = (props) => {

  const {name, city, country, imageUrl} = props.data;

  return (
    <div className="guests-Homes">
      <img className= "imageHotel" src={imageUrl} alt={name}/>
      <div className="text_hotel">{name}</div>
      <div className="location">{city}, {country}</div>
    </div>
  );  
}

HotelItem.propTypes = {
  data: PropTypes.object
};  

export default HotelItem;