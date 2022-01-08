import React, {useState} from 'react';
import FilterItem from './FilterItem';
import '../../../style/TopStyle/Form.css';
import PropTypes from 'prop-types';
import SelectChildAge from './SelectChildAge';

function FilterForm(props) {

    const maxAdult = 30;
    const maxChild = 10;
    const maxRooms = 30;
    const childrenAgeMessage = "What is the age of the child you’re travelling with?";
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [room, setRoom] = useState(0);


    const toNum = (value) => {
        if (value == "") {
            value = 0;
        }
        return parseInt(value);
    }

    const setValidChild = (child) => {
        child = toNum(child);
        if (child >= 0 && child <= maxChild && adults > 0) {
            setChildren(child);
            props.changeValue(`${adults} Adults — ${child} Children — ${room} Room`);
        } 
    }

    const setValidAdults = (adults) => {
        adults = toNum(adults);
        if (adults == 0) {
            setChildren(0);
        }
        if (adults >= 0 && adults <= maxAdult) {
            setAdults(adults);
            props.changeValue(`${adults} Adults — ${children} Children — ${room} Room`);
        }
    }

    const setValidRooms = (room) => {
        room = toNum(room);
        if (room >= 0 && room <= maxRooms) {
            setRoom(room);
            props.changeValue(`${adults} Adults — ${children} Children — ${room} Room`);
        } 
    }

    return (
        <>
            <div className="counter-items-wrapper">
                <FilterItem
                    name="Adults"
                    count={adults}
                    setFunc={setValidAdults}
                    enableButtons = {{
                        plus : adults < maxAdult, 
                        minus: adults > 0}}
                />
                <FilterItem
                    name="Children"
                    count={children}
                    setFunc={setValidChild}
                    enableButtons = {{
                        plus : children < maxChild && adults > 0,
                        minus : children > 0
                    }}
                />
                <FilterItem
                    name="Rooms"
                    count={room}
                    setFunc={setValidRooms}
                    enableButtons = {{
                        plus : room < maxRooms,
                        minus : room > 0
                    }}
                />
            </div>
            <span className={`age-of-child${children == 0 ? " hide" : ""}`} id="childAgeQuastion">{childrenAgeMessage}</span>
            <div id="selectsWrapper" className = "selectsWrapper">
                {[...Array(children)].map((x, i) =>
                     <SelectChildAge key={i} />
                )}
            </div>
        </>
    )
}

FilterForm.propTypes = {
    changeValue: PropTypes.func,
}

export default FilterForm;

