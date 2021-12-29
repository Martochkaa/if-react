import React from 'react';
import HeaderTop from './HeaderTop';
import '../../style/TopStyle/Top.css';
import Filter from '../filter/Filter';
import '../../style/TopStyle/HeaderTop.css';
import '../../style/TopStyle/Form.css';
import background from'../../img/icons/fon.png';
import '../../img/icons/header-sprite.svg#night';
import '../../img/icons/header-sprite.svg#account';
import '../../img/icons/header-sprite.svg#burger-menu';
import AvailableHotels from '../filter/AvailableHotels';


class Top extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAvailableHotelsVisible: false,
      availableHotels : []
    }

    this.setAvailableHotels = this.setAvailableHotels.bind(this);
  }

  setAvailableHotels(availableHotels) {
    this.setState({
      isAvailableHotelsVisible : true,
      availableHotels : availableHotels
    })
  }

  render () {
    return (
      <>
      <div className="top-section" style={{ backgroundImage: `url('${background}')` }} >
        <HeaderTop/>
        <Filter setAvailableHotels={this.setAvailableHotels}/>
      </div>
      {this.state.isAvailableHotelsVisible ? 
          <AvailableHotels hotelData={this.state.availableHotels} /> : 
          <></>
      }
      </>
    );  
  }
}

export default Top;