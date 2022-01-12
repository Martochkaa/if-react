import React from "react";

const DateFilter = () => {
    return (
        <div className="top-check-container col-md-12">
        <div className="container_calendar">
            <input className="calendar check-in-container col-md-6" type="date" name="calendar" placeholder="Check-in — Check-out"></input>
            <input className="calendar check-in-container col-md-6" type="date" name="calendar"></input>
        </div>
    </div>
    )
}

export default DateFilter;