import React from 'react';
import google from '../../img/icons/google-play-badge.png';
import app from '../../img/icons/app.png';
import DateFilter from './DateFilter';
import FilterForm from './filterform/FilterForm';
import '../../style/TopStyle/Form.css';
import PropTypes from 'prop-types';

export default class Filter extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            cityFilter: "",
            roomFilter: "0 Adults — 0 Children — 0 Room",
            isRoomFilterHide : true,
        };
                 
        this.changeCityFilter = this.changeCityFilter.bind(this);
        this.clickRoomFilter = this.clickRoomFilter.bind(this);
        this.showAvailableHotels = this.showAvailableHotels.bind(this);
        this.changeFilterFormValue = this.changeFilterFormValue.bind(this);
    }

    clickRoomFilter() {
        this.setState({ isRoomFilterHide : !this.state.isRoomFilterHide })
    }

    changeFilterFormValue(value) {
        this.setState({roomFilter : value})
    }

    changeCityFilter({target}) {
        this.setState({ cityFilter : target.value })
    }

    
    showAvailableHotels() {
        this.props.setAvailableHotels(null, true, null);
        const cityFilter = this.state.cityFilter;
        fetch("https://fe-student-api.herokuapp.com/api/hotels" + (cityFilter ? "?search=" + cityFilter : ""))
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

    render() {
        return (
            <>
            <article>
                <div className="city-date-form" autoFocus>
                    <div className="city-input-container col-md-12">
                        <input id="citySearchInput" className="city-input input-text col-md-12" type="text" name="search" required autoComplete="off" defaultValue=""
                            onChange={this.changeCityFilter}
                        />
                        <label className="city-input-label">Your destination or hotel name</label>
                    </div>
                    <DateFilter/>
                    <input onClick={this.clickRoomFilter} className="guest-input input-text col-md-12" id="guestInput" type="text" placeholder={this.state.roomFilter} autoComplete="off" ></input>
                    <button onClick={this.showAvailableHotels} className="search-button col-md-12" id="searchHotel" type="submit" form="mainForm">Search</button>
                </div>
                <div className="apple-google">
                <a href="https://play.google.com"><img className="google-img" src={google} alt="google"/></a>
                <a href="https://www.apple.com/ru/app-store/"><img className="apple-img" src={app} alt="app"/></a>
                </div>
                <div className={`filter-form${this.state.isRoomFilterHide ? " hide" : ""}`} id="filterForm">
                    <FilterForm changeValue={this.changeFilterFormValue}/>
                </div>
            </article>
            </>
        );
    }

}

Filter.propTypes = {
    setAvailableHotels:PropTypes.func
}