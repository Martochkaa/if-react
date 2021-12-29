
import React from 'react';
import PropTypes from 'prop-types';

function FilterItem(props) {

    const {plusEvent, minusEvent, count} = props;

    return (
        <div className="counter-item">
            <span className="counter-label">Adult</span>
            <div className="buttons-input-wrapper"> 
                <button onClick={minusEvent} type="button" className="counter-plus-minus-gray counter-btn" id="btnCounterAdultMinus" data-direction="minus">-</button>
                <input className="counter-current-value" type="text" id="counterAdult" value={count} form="mainForm"></input>
                <button onClick={plusEvent} type="button" className="counter-plus-minus-blue counter-btn" id="btnCounterAdultPlus" data-direction="plus">+</button>
            </div>
        </div>
    )
}

FilterItem.propTypes = {
    plusEvent: PropTypes.func,
    minusEvent: PropTypes.func,
    count: PropTypes.number
  };  


export default FilterItem;