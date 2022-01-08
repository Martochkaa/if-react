import React from 'react';
import PropTypes from 'prop-types';

function FilterButton(props) {
    return (
      <>
        <button onClick={props.isEnable ? props.event : () => {}}  
            className={`counter-btn counter-plus-minus-${props.isEnable ? "blue" : "gray"}`}>{props.value}
        </button>
      </>
    )
}

FilterButton.propTypes = {
    isEnable: PropTypes.bool,
    event: PropTypes.func,
    value: PropTypes.string
  };  


export default FilterButton;