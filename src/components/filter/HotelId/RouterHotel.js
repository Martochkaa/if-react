//import React from 'react';
//import nightIcon from '../../../img/icons/Night.png';
//import account from '../../../img/icons/Vector.png';
//import {
  //BrowserRouter as
 // Link,
//  Route,
//  Switch
//} from 'react-router-dom';
//import HotelItem from '../../HotelItem';
//import AvailableHotels from '../AvailableHotels';
//import HotelDetail from './NewHotels';
//import logo_vector from '../../../img/icons/logo_vector.png'
//import { Component } from 'react';







//class HotelRouter extends Component {
  //  constructor(props) {
    //    super(props);
      //  this.state = {
        //hotels: [],
//      };
  //  }
//componentDidMount () {
  //  fetch(`https://fe-student-api.herokuapp.com/api/hotels`)
    //.then(res => res.json()).then((hotels) => {
      //  this.setState({hotels});
//    });
//}

//      render() {
  //  return (
//<> 
  //  <Link to="https://fe-student-api.herokuapp.com/api/">
     
//    </Link>
  
  
//<Switch>
  //<Route exact path="https://fe-student-api.herokuapp.com/api/">
    //<AvailableHotels/>
//    </Route>
  //  <Route exact patch="/hotels/:id">
//    <HotelDetail/>
  //  </Route>
//</Switch>
//</>
    
  //  );
//}
//}

//export default HotelRouter













//function RouterHotel() {
  //  const match = useRouteMatch();


//    return (
  //      <>
    //    <nav className="stays animated-header-line"><a href="#" className="header-link">Stays</a></nav>
      //      <nav className="attractions animated-header-line"><a href="#" className="header-link">Attractions</a></nav>
        //    <div className="top-icon-night" style={{ backgroundImage: `url('${nightIcon}')` }} ></div>
          //  <div className="top-icon-account" style={{ backgroundImage: `url('${account}')` }} ></div>
            //<nav className="top-icon-burger"></nav>
       
//        <Link to={`${match.url}/hotels`}>
  //              <HotelItem/>
    //    </Link>
 //       <footer className="last_block">
   // <div className="heading_logo">
//        <img className="heading_logo_last" src={logo_vector} alt="heading_logo"/>
  //  </div>
    //<div className="container">
//    <div className="container_about">
  //      <ul>
    //    <li className="heading_about">About</li>
      //  <li className="list_items">Now Triphouse works</li>
        //<li className="list_items">Careers</li>
 //       <li className="list_items">Privacy</li>
   //     <li className="list_items">Terms</li>
 //   </ul>
   // </div>
 //   <div className="container_property_types">
   //     <ul>
     //   <li className="heading_property">Property types</li>
       // <li className="list_items">Guest houses</li>
//        <li className="list_items">Hotels</li>
  //      <li className="list_items">Apartments</li>
    //    <li className="list_items">Villas</li>
      //  <li className="list_items">Holiday homes</li>
        //<li className="list_items">Hostels</li>
//    </ul>
  //  </div>
    //<div className="container_support">
      //  <ul>
        //<li className="heading_support">Support</li>
//        <li className="list_items">Contact Customer Service</li>
  //      <li className="list_items">FAQ</li>
    //</ul>
//    </div>
  //  </div>
    //    <p className="caption">&copy; 2020 Triphouse, lnc. All right reserved</p>
//    </footer>
  //      </>
  //  )
   
//}

//export default RouterHotel;