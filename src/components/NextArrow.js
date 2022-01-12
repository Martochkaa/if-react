import React from 'react';
import arrow from '../img/icons/arrowNext.svg';
import'../style/NextArrow.css';
import PropTypes from 'prop-types';

const NextArrow =({ onClick }) => {
  return (
    <button className="nextArrow" onClick={onClick} >
      <img src={arrow} alt="Arrow" className="img-arrow"/> 
    </button> 
  )
}

NextArrow.propTypes = {
  onClick: PropTypes.func
};

export default NextArrow;