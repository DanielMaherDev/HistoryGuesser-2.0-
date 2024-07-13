import React from 'react';
import './Footer.css';

const Footer = ({
    year,
    score
}) => {
    return ( <
        div className = "footer" >
        <
        div className = "score" > Score: {
            score
        } < /div> <
        div className = "year-scroll" > {
            year
        } < /div> <
        /div>
    );
};

export default Footer;