// src/components/CountdownScreen/CountdownScreen.js
import React, {
    useEffect,
    useState
} from 'react';
import './CountdownScreen.css';

const CountdownScreen = ({
    onComplete
}) => {
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if (countdown === 0) {
            onComplete();
            return;
        }

        const intervalId = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [countdown, onComplete]);

    return ( <
        div className = "countdown-screen" >
        <
        div className = "countdown-number" > {
            countdown
        } < /div> <
        /div>
    );
};

export default CountdownScreen;