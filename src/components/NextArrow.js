import React from 'react';
import logo from '../img/icons/arrowNext.svg';
import'../style/NextArrow.css';
import PropTypes from 'prop-types';


function NextArrow({ onClick })  {
  return (
    <div className={"nextArrow text-arrow"} onClick={onClick} >
      <img src={logo} alt="Logo" className={"img-arrow"}/> 
    </div> 
  )
}

NextArrow.propTypes = {
  onClick: PropTypes.func
};

export default NextArrow;