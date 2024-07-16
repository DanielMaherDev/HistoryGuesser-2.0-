// src/components/GameScreen/GameScreen.js
import React, {
    useState,
    useEffect
} from 'react';
import './GameScreen.css';
import logo from '../../assets/images/history-guesser-logo.png';
import YearScroller from '../YearScroller/YearScroller';
import HistoricalImage from '../HistoricalImage/HistoricalImage';
import QuestionLoadingScreen from '../QuestionLoadingScreen/QuestionLoadingScreen';
import CountdownScreen from '../CountdownScreen/CountdownScreen';

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
        const [hints, setHints] = useState('');
        const [fetching, setFetching] = useState(true);
        const [showLoadingScreen, setShowLoadingScreen] = useState(true);
        const [showCountdown, setShowCountdown] = useState(false);
        const [hintIndex, setHintIndex] = useState(0);

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

        const handleImageLoad = () => {
            setShowLoadingScreen(false);
            setShowCountdown(true);
        };

        const handleCountdownComplete = () => {
            setShowCountdown(false);
            setTimeLeft(10.00);
            setHintIndex(0);
            setTimeout(() => {
                setHintIndex(1);
                setTimeout(() => {
                    setHintIndex(2);
                    setTimeout(() => {
                        setHintIndex(3);
                    }, 2000);
                }, 2000);
            }, 3000);
        };

        const handleGuess = () => {
            if (imageYear) {
                const yearDiff = Math.abs(year - imageYear);
                const calculatedPoints = Math.max(0, Math.round((100 - yearDiff) * multiplier));
                setPoints(points + calculatedPoints);
                setStreak(streak + 1);
                setFetching(true);
                setShowLoadingScreen(true);
            }
        };

        useEffect(() => {
            if (!showCountdown && !showLoadingScreen && timeLeft > 0) {
                const multiplierIntervalId = setInterval(() => {
                    setMultiplier((prevMultiplier) => {
                        const newMultiplier = (prevMultiplier - 0.05).toFixed(2);
                        if (newMultiplier <= 1.00) {
                            clearInterval(multiplierIntervalId);
                            return 1.00;
                        }
                        return newMultiplier;
                    });
                }, 100);

                return () => clearInterval(multiplierIntervalId);
            }
        }, [showCountdown, showLoadingScreen]);

        return ( <
                div className = "game-screen" > {
                    showLoadingScreen && < QuestionLoadingScreen / >
                } {
                    showCountdown && < CountdownScreen onComplete = {
                        handleCountdownComplete
                    }
                    />} <
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
                        HistoricalImage
                    setImageYear = {
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
                    div className = "hints" > {
                            hintIndex >= 1 && < div className = "hint-message" > Image Hint: {
                                hints.hintImage
                            } < /div>} {
                                hintIndex >= 2 && < div className = "hint-message" > Year Hint: {
                                    hints.hintYear
                                } < /div>} {
                                    hintIndex >= 3 && < div className = "hint-message" > Location Hint: {
                                            hints.hintLocation
                                        } < /div>} <
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
                                        } > Guess < /button> <
                                        /div> <
                                        /div>
                                );
                            };

                            export default GameScreen;