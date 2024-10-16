import React from 'react';

const DateDivider = ({ date }) => {
    return (
        <div className="date-divider">
            <hr className="date-divider-line" />
            <span className="date-divider-text">{date}</span>
        </div>
    );
};

export default DateDivider;
