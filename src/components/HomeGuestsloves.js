import React, {useEffect, useState} from 'react';
import HotelItem from './HotelItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/HomeGuestsLoves.css';
import NextArrow from './NextArrow';
import BackArrow from './BackArrow'


function HomeGuestsloves() {  

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
    .then(res => res.json())
    .then(
        (result) => {
            setIsLoaded(true);
            setItems(result);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
    )
  }, [])

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <BackArrow />,
    nextArrow: <NextArrow />,
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Slider {...settings}>
        {items.map((item) => (
          <HotelItem 
              key = {item.name}
              data = {item}/>)
          )}
      </Slider>
    );
  }
}

export default HomeGuestsloves;
