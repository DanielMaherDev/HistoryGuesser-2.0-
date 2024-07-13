import React from 'react';
import './InfoPanel.css';

const InfoPanel = ({
    event,
    location
}) => {
    return ( <
        div className = "info-panel" >
        <
        div className = "event-info" > EVENT: {
            event
        } < /div> <
        div className = "location-info" > LOCATION: {
            location
        } < /div> <
        /div>
    );
};

export default InfoPanel;