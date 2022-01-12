import React from 'react';
import arrow from '../img/icons/arrowNext.svg';
import'../style/BackArrow.css';
import PropTypes from 'prop-types';

const BackArrow = ({onClick}) => {
    return (
      <button className="BackArrow" onClick={onClick} >
        <img src={arrow} alt="Arrow" className="img-arrow-back"/> 
      </button> 
    )
  }
  
  BackArrow.propTypes = {
    onClick: PropTypes.func
  };
  
export default BackArrow;
