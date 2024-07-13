import React, {
    useEffect
} from 'react';

const SplashScreen = ({
    onTransition
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onTransition();
        }, 2000); // Display splash screen for 2 seconds

        return () => clearTimeout(timer); // Cleanup the timer
    }, [onTransition]);

    return ( <
        div className = "splash-screen" >
        <
        h1 > Loading... < /h1> < /
        div >
    );
};

export default SplashScreen;