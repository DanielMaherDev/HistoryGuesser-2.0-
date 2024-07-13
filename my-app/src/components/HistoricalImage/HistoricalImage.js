import React from 'react';
import './HistoricalImage.css';

const HistoricalImage = ({
    src,
    description
}) => {
    return ( <
        div className = "historical-image" >
        <
        img src = {
            src
        }
        alt = {
            description
        }
        /> <
        p > {
            description
        } < /p> <
        /div>
    );
};

export default HistoricalImage;