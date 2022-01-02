import React from 'react';
import TripHous from '../../img/icons/logo_vector.png';
import nightIcon from '../../img/icons/Night.png';
import account from '../../img/icons/Vector.png';


function HeaderTop() {  
    return (
        <>
        <header>
            <div className="top-icon-logo">
                <img src={TripHous} alt="TripHous" className="icon-logo"/> 
            </div>
            <nav className="stays animated-header-line"><a href="#" className="header-link">Stays</a></nav>
            <nav className="attractions animated-header-line"><a href="#" className="header-link">Attractions</a></nav>
            <div className="top-icon-night" style={{ backgroundImage: `url('${nightIcon}')` }} ></div>
            <div className="top-icon-account" style={{ backgroundImage: `url('${account}')` }} ></div>
            <nav className="top-icon-burger"></nav>
        </header>
        <h1 className="heading_top"> Discover stays to live, work or just relax </h1>
       </>
    );
  }
  
  export default HeaderTop;
  
  