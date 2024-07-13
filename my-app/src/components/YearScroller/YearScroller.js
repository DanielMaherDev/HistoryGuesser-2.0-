import React, {
    useState,
    useEffect
} from 'react';
import './YearScroller.css';

function YearScrollWheel() {
    const [year, setYear] = useState(1900); // Default year

    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault();
            const delta = Math.sign(event.deltaY);
            setYear((prevYear) => Math.min(2024, Math.max(1800, prevYear + delta)));
        };

        window.addEventListener('wheel', handleWheel, {
            passive: false
        });
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const handleChange = (event) => {
        setYear(parseInt(event.target.value, 10));
    };

    return ( <
        div className = "year-scroll-wheel" >
        <
        input type = "range"
        min = "1800"
        max = "2100"
        value = {
            year
        }
        onChange = {
            handleChange
        }
        className = "scroll-input" /
        >
        <
        div className = "year-display" > {
            year
        } < /div> < /
        div >
    );
}

export default YearScrollWheel;