import PropTypes from 'prop-types';
import React from "react";


export default class HotelDetail extends React.Component {

  constructor(props){
    super(props);
  

    this.FetchHotelsRouter = this.FetchHotelsRouter.bind(this);
  }
   FetchHotelsRouter () {  

    this.props.setAvailableHotels(null, true, null);
        fetch("https://fe-student-api.herokuapp.com/api/hotels")
            .then(res => res.json())
            .then(
                (result) => {
                    this.props.setAvailableHotels(result, false, null)
                },
                (error) => {
                    this.props.setAvailableHotels(null, false, error)
                }
            )
    }

  }

HotelDetail.propTypes = {
  setAvailableHotels:PropTypes.func
}
