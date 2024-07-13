import React, {
    useState,
    useEffect
} from 'react';
import './GameScreen.css';
import logo from '../../assets/images/history-guesser-logo.png';
import YearScroller from '../YearScroller/YearScroller';
import HistoricalImage from '../HistoricalImage/HistoricalImage';

const GameScreen = () => {
    const [timeLeft, setTimeLeft] = useState(10.00);
    const [displayTime, setDisplayTime] = useState(10);
    const [multiplier, setMultiplier] = useState(5.00);
    const [year, setYear] = useState(1900);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newTime = prevTime - 0.1;
                if (newTime <= 0) {
                    clearInterval(intervalId);
                    setDisplayTime(0);
                    return 0;
                }
                if (Math.floor(newTime) !== Math.floor(prevTime)) {
                    setDisplayTime(Math.floor(newTime));
                }
                return newTime.toFixed(2);
            });
        }, 100);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    useEffect(() => {
        setMultiplier((1 + (4 * timeLeft / 10)).toFixed(2));
    }, [timeLeft]);

    return ( <
        div className = "game-screen" >
        <
        div className = "top-bar" >
        <
        div className = "logo" >
        <
        img src = {
            logo
        }
        alt = "History Guesser Logo" / >
        <
        /div> <
        div className = "timer" > Timer: {
            displayTime
        }
        s < /div> <
        div className = "multiplier" > Multiplier: {
            multiplier
        }
        x < /div> <
        div className = "streak" > Streak < /div> <
        div className = "close" > X < /div> < /
        div > <
        div className = "main-content" >
        <
        div className = "image" > < HistoricalImage / >
        <
        /div> <
        div className = "hints" > Hints < /div> < /
        div > <
        div className = "bottom-bar" >
        <
        YearScroller year = {
            year
        }
        setYear = {
            setYear
        }
        /> <
        div className = "guess-button" > Guess(button) < /div> < /
        div > <
        /div>
    );
};

export default GameScreen;