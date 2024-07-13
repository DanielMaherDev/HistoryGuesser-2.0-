import React from 'react';
import './GameScreen.css';
import logo from '../../assets/images/history-guesser-logo.png'; // Adjust the path as necessary

const GameScreen = () => {
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
        div className = "timer" > TIMER < /div> <
        div className = "multiplier" > Multiplier < /div> <
        div className = "streak" > Streak < /div> <
        div className = "close" > X < /div> < /
        div > <
        div className = "main-content" >
        <
        div className = "image" > IMAGE < /div> <
        div className = "hints" > Hints < /div> < /
        div > <
        div className = "bottom-bar" >
        <
        div className = "year-scroller" > Year Scroller < /div> <
        div className = "guess-button" > Guess(button) < /div> < /
        div > <
        /div>
    );
};

export default GameScreen;