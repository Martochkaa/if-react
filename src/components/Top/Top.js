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
      isLoading: false,
      isAvailableHotelsVisible: false,
      errors: null,
      availableHotels : null
    }

    this.setAvailableHotels = this.setAvailableHotels.bind(this);
  }

  setAvailableHotels(availableHotels, isLoading, errors) {
    this.setState({
      isLoading : isLoading,
      availableHotels : availableHotels ? availableHotels : this.state.availableHotels,
      errors: errors
    })
  }
  

  render () {
    return (
      <>
      <div className="top-section" style={{ backgroundImage: `url('${background}')` }} >
        <HeaderTop/>
        <Filter setAvailableHotels={this.setAvailableHotels}/>
      </div>
      {this.state.availableHotels && <AvailableHotels hotelData={this.state.availableHotels}/> }
          <></>
      </>
    );  
  }
}

export default Top;