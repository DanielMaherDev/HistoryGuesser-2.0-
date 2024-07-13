import React, {
    useState
} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HistoricalImage from '../HistoricalImage/HistoricalImage';
import InfoPanel from '../InfoPanel/InfoPanel';
import './GameScreen.css';

const GameScreen = () => {
    const [year, setYear] = useState(1900);

    const handleScroll = (event) => {
        if (event.deltaY < 0) {
            setYear(year + 1); // Scroll up
        } else {
            setYear(year - 1); // Scroll down
        }
    };

    return ( <
        div className = "game-screen"
        onWheel = {
            handleScroll
        } >
        <
        Header / >
        <
        div className = "content" >
        <
        HistoricalImage src = "historical_image_url"
        description = "Historical Image" / >
        <
        InfoPanel event = "Major Emigration Wave"
        location = "Ireland" / >
        <
        /div> <
        Footer year = {
            year
        }
        score = {
            100
        }
        /> <
        /div>
    );
};

export default GameScreen;