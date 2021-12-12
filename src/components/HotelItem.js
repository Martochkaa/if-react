import React from 'react';

function HotelItem(props) {

  const {name, city, country, imageUrl} = props.item;

  return (
    <div className="guests-Homes">
      <img src={imageUrl} alt={name}/>
      <div className="text_hotel">{name}</div>
      <div className="location">{city}, {country}</div>
    </div>
  );  
}

export default HotelItem;
