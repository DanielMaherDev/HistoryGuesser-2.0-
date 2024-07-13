// src/pages/SplashScreen.js
import React, {
    useEffect,
    useState
} from 'react';

const SplashScreen = ({
    onTransition
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const loadInterval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(loadInterval);
                    setIsLoading(false);
                    onTransition();
                    return 100;
                }
                return prevProgress + 10; // Increment the progress by 10
            });
        }, 500); // Adjust the interval to control loading speed

        return () => clearInterval(loadInterval);
    }, [onTransition]);

    return ( <
        div className = "splash-screen" >
        <
        div className = "loading-container" >
        <
        img src = "/path/to/loading-image.png"
        alt = "Loading"
        className = "loading-image" / >
        <
        div className = "loading-bar" >
        <
        div className = "loading-progress"
        style = {
            {
                width: `${progress}%`
            }
        } > < /div> < /
        div > <
        /div> < /
        div >
    );
};

export default SplashScreen;