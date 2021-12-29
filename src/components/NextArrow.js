import React from 'react';
import arrow from '../img/icons/arrowNext.svg';
import'../style/NextArrow.css';
import PropTypes from 'prop-types';

function NextArrow({ onClick })  {
  return (
    <div className="nextArrow" onClick={onClick} >
      <img src={arrow} alt="Arrow" className="img-arrow"/> 
    </div> 
  )
}

NextArrow.propTypes = {
  onClick: PropTypes.func
};

export default NextArrow;