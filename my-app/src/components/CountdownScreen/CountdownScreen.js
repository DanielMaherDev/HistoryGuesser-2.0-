import React, {
    useState,
    useEffect
} from 'react';
import './CountdownScreen.css';

const CountdownScreen = ({
    onCountdownComplete
}) => {
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            onCountdownComplete();
        }
    }, [countdown, onCountdownComplete]);

    return ( <
        div className = "countdown-screen" >
        <
        h1 > {
            countdown
        } < /h1> <
        /div>
    );
};

export default CountdownScreen;