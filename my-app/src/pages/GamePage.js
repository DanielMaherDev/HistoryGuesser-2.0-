// src/pages/GamePage.js
import React, {
    useState,
    useEffect
} from 'react';

const GamePage = ({
    selectedPack
}) => {
    const [timeLeft, setTimeLeft] = useState(60); // Countdown timer set to 60 seconds

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timerId);
        }
    }, [timeLeft]);

    const handleCellClick = (index) => {
        console.log(`Cell ${index} clicked`);
        // Add your game logic here
    };

    return ( <
        div className = "game-page" >
        <
        h1 > {
            selectedPack
        } - Main Game < /h1> <
        div className = "countdown" > Time Left: {
            timeLeft
        }
        s < /div> <
        div className = "grid-container" > {
            Array.from({
                length: 9
            }).map((_, index) => ( <
                div key = {
                    index
                }
                className = "grid-item"
                onClick = {
                    () => handleCellClick(index)
                } > {
                    index + 1
                } <
                /div>
            ))
        } <
        /div> < /
        div >
    );
};

export default GamePage;