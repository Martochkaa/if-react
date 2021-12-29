import React from "react";
import PropTypes from "prop-types";

const CityFilter = ({onChange}) => {

    const filter = ({target}) => {
        return onChange(target);
    }

    return (
        <>
        <div className="city-input-container col-md-12">
            <input id="citySearchInput" className="city-input input-text col-md-12" type="text" name="search" required autoComplete="off"
                onChange={filter}
            />
            <label className="city-input-label">Your destination or hotel name</label>
        </div>
        </>
    )
}

CityFilter.propTypes = {
    onChange: PropTypes.func
}

export default CityFilter;