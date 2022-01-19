import nightIcon from '../../../img/icons/Night.png';
import account from '../../../img/icons/Vector.png';
import logo_vector from '../../../img/icons/logo_vector.png'
//import HotelDetail from '../HotelId/RouterHotel'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

  const FetchHotelsRouter = () => {  

    const params = useParams()

    const [availableHotel, setAvailableHotel] = useState(null)
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
  
    useEffect(() => {
      const url = new URL(
        'https://fe-student-api.herokuapp.com/api/hotels/hotelId',
      )
      const newUrl = new URL(`${params.id}`, url)
  
      fetch(`${newUrl}`)
        .then((response) => response.json())
        .then(
          (result) => {
            setIsLoaded(true)
            setAvailableHotel(result)
          },
          (error) => {
            setIsLoaded(true)
            setError(error)
          },
        )
    }, [params.id])
  
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else if (availableHotel === null) {
      return <div>Loading...</div>
    } else {
      return (
        <div> 
        <nav className="stays animated-header-line"><a href="#" className="header-link">Stays</a></nav>
        <nav className="attractions animated-header-line"><a href="#" className="header-link">Attractions</a></nav>
        <div className="top-icon-night" style={{ backgroundImage: `url('${nightIcon}')` }} ></div>
        <div className="top-icon-account" style={{ backgroundImage: `url('${account}')` }} ></div>
        <nav className="top-icon-burger"></nav>  

      <div className="guests-Homes">
      <img className= "imageHotel" src={availableHotel.imageUrl} alt={availableHotel.name}/>
      <div className="text_hotel">{availableHotel.name}</div>
      <div className="location">{availableHotel.city}, {availableHotel.country}</div>
      </div>

        <footer className="last_block">
      <div className="heading_logo">
      <img className="heading_logo_last" src={logo_vector} alt="heading_logo"/>
      </div>
      <div className="container">
      <div className="container_about">
       <ul>
       <li className="heading_about">About</li>
       <li className="list_items">Now Triphouse works</li>
       <li className="list_items">Careers</li>
       <li className="list_items">Privacy</li>
       <li className="list_items">Terms</li>
       </ul>
    </div>
   <div className="container_property_types">
        <ul>
        <li className="heading_property">Property types</li>
        <li className="list_items">Guest houses</li>
        <li className="list_items">Hotels</li>
        <li className="list_items">Apartments</li>
        <li className="list_items">Villas</li>
        <li className="list_items">Holiday homes</li>
        <li className="list_items">Hostels</li>
    </ul>
   </div>
   <div className="container_support">
        <ul>
        <li className="heading_support">Support</li>
        <li className="list_items">Contact Customer Service</li>
        <li className="list_items">FAQ</li>
    </ul>
    </div>
   </div>
        <p className="caption">&copy; 2020 Triphouse, lnc. All right reserved</p>
    </footer>
    </div>  
    );
    }
  }
    export default FetchHotelsRouter;
