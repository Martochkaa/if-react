import React from 'react';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton';

function FilterItem(props) {

    const {name, count, setFunc, enableButtons} = props;

    return (
        <div className="counter-item">
            <span className="counter-label">{name}</span>
            <div className="buttons-input-wrapper"> 
                <FilterButton id="btnCounterAdultMinus" value="-" isEnable={enableButtons.minus} event={() => setFunc(count - 1)}/>
                <input onChange={(event) => {setFunc(event.target.value)} }
                    className="counter-current-value" type="text" id="counterAdult" form="mainForm"
                    value={count}></input>
                <FilterButton id="btnCounterAdultPlus" value="+" isEnable={enableButtons.plus} event={() => setFunc(parseInt(count) + 1)}/>
            </div>
        </div>
    )
}

FilterItem.propTypes = {
    name: PropTypes.string,
    count: PropTypes.number,
    setFunc: PropTypes.func,
    enableButtons: PropTypes.object
  };  


export default FilterItem;