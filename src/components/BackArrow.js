import React from 'react';
import logo from '../img/icons/arrowNext.svg';
import'../style/BackArrow.css';
import PropTypes from 'prop-types';

const BackArrow = ({onClick}) => {
    return (
        <div className="BackArrow" onClick={onClick} >
        <img src={logo} alt="Logo" className="img-arrow-back"/> 
      </div> 
    )
  }
  
  BackArrow.propTypes = {
    onClick: PropTypes.func
  };
  
  export default BackArrow;
