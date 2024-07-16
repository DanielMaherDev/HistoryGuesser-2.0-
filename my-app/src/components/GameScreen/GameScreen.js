import React, {
    useState,
    useEffect,
    useCallback
} from 'react';
import './GameScreen.css';
import logo from '../../assets/images/history-guesser-logo.png';
import YearScroller from '../YearScroller/YearScroller';
import HistoricalImage from '../HistoricalImage/HistoricalImage';
import CountdownScreen from '../CountdownScreen/CountdownScreen';
import QuestionLoadingScreen from '../QuestionLoadingScreen/QuestionLoadingScreen';
import InfoPanel from '../InfoPanel/InfoPanel';

const GameScreen = ({
    selectedPack
}) => {
    const [timeLeft, setTimeLeft] = useState(10.00);
    const [displayTime, setDisplayTime] = useState(10);
    const [multiplier, setMultiplier] = useState(5.00);
    const [year, setYear] = useState(1900);
    const [imageYear, setImageYear] = useState(null);
    const [streak, setStreak] = useState(0);
    const [points, setPoints] = useState(0);
    const [hints, setHints] = useState({});
    const [fetching, setFetching] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [countdownComplete, setCountdownComplete] = useState(false);

    const fetchNewImage = useCallback(() => {
        setFetching(true);
    }, []);

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

    const handleGuess = () => {
        if (imageYear) {
            const yearDiff = Math.abs(year - imageYear);
            const calculatedPoints = Math.max(0, Math.round((100 - yearDiff) * multiplier));
            setPoints(points + calculatedPoints);
            setStreak(streak + 1);
            setTimeLeft(10.00);
            fetchNewImage();
        }
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleCountdownComplete = () => {
        setCountdownComplete(true);
    };

    useEffect(() => {
        if (imageLoaded) {
            const timeoutId = setTimeout(() => {
                setCountdownComplete(true);
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [imageLoaded]);

    return ( <
        div className = "game-screen" > {
            !imageLoaded && ( <
                QuestionLoadingScreen onForceStart = {
                    () => setImageLoaded(true)
                }
                imageLoaded = {
                    imageLoaded
                }
                />
            )
        } {
            imageLoaded && !countdownComplete && ( <
                CountdownScreen onCountdownComplete = {
                    handleCountdownComplete
                }
                />
            )
        } {
            countdownComplete && ( <
                >
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
                div className = "streak" > Streak: {
                    streak
                } < /div> <
                div className = "close" > X < /div> <
                /div> <
                div className = "main-content" >
                <
                div className = "image" >
                <
                HistoricalImage setImageYear = {
                    setImageYear
                }
                setHints = {
                    setHints
                }
                fetching = {
                    fetching
                }
                setFetching = {
                    setFetching
                }
                selectedPack = {
                    selectedPack
                }
                onImageLoad = {
                    handleImageLoad
                }
                /> <
                /div> <
                div className = "hints" >
                <
                InfoPanel hints = {
                    hints
                }
                /> <
                /div> <
                /div> <
                div className = "bottom-bar" >
                <
                YearScroller year = {
                    year
                }
                setYear = {
                    setYear
                }
                /> <
                button className = "guess-button"
                onClick = {
                    handleGuess
                } >
                Guess <
                /button> <
                /div> <
                />
            )
        } <
        /div>
    );
};

export default GameScreen;