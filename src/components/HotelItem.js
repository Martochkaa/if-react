import React from 'react';
import PropTypes from 'prop-types';

function HotelItem(props) {

  const {name, city, country, imageUrl} = props.data;

  return (
    <div className="guests-Homes">
      <img src={imageUrl} alt={name}/>
      <div className="text_hotel">{name}</div>
      <div className="location">{city}, {country}</div>
    </div>
  );  
}

HotelItem.propTypes = {
  data: PropTypes.object
};

export default HotelItem;