import React  from 'react';
import FilterItem from './RoomFilterItem';
import '../../style/TopStyle/Form.css';



function minusParent(event) {
    event.target.classList.remove('counter-plus-minus-blue');
    event.target.classList.add('counter-plus-minus-grey');
}


function RoomFilter() {
    return (
        <>
            <div className="counter-items-wrapper">
                <FilterItem 
                    count ={0}
                    minusEvent={minusParent}
                />
                <div className="counter-item">
                    <span className="counter-label">Children</span>
                    <div className="buttons-input-wrapper"> 
                        <button type="button" className="counter-plus-minus-gray counter-btn" id="btnCounterAdultMinus" data-direction="minus">-</button>
                        <input className="counter-current-value" type="text" id="counterAdult" defaultValue="0" form="mainForm"></input>
                        <button type="button" className="counter-plus-minus-blue counter-btn" id="btnCounterAdultPlus" data-direction="plus">+</button>
                    </div>
                </div>
                <div className="counter-item">
                    <span className="counter-label">Room</span>
                    <div className="buttons-input-wrapper"> 
                        <button type="button" className="counter-plus-minus-gray counter-btn" id="btnCounterAdultMinus" data-direction="minus">-</button>
                        <input className="counter-current-value" type="text" id="counterAdult" defaultValue="0" form="mainForm"></input>
                        <button type="button" className="counter-plus-minus-blue counter-btn" id="btnCounterAdultPlus" data-direction="plus">+</button>
                    </div>
                </div>
            </div>
            <span className="age-of-child hide" id="childAgeQuastion">What is the age of the child you’re travelling with?</span>
            <div id="selectsWrapper"></div>
        </>
    )
}

export default RoomFilter;

