// src/pages/SplashScreen.js
import React, {
    useEffect,
    useState
} from 'react';

const SplashScreen = ({
    onTransition
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPack, setSelectedPack] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (isLoading) {
                setIsLoading(false);
                onTransition();
            }
        }, 5000); // 5 seconds delay

        return () => clearTimeout(timer);
    }, [isLoading, onTransition]);

    const handlePackSelection = (pack) => {
        setSelectedPack(pack);
        setIsLoading(false);
        onTransition(pack);
    };

    return ( <
        div className = "splash-screen" >
        <
        h1 > Welcome to the Game < /h1> <
        div className = "packs" >
        <
        button onClick = {
            () => handlePackSelection('Irish War History')
        } > Irish War History < /button> {
            /* Add more packs here */ } <
        /div> <
        button onClick = {
            () => {
                setIsLoading(false);
                onTransition();
            }
        } > Go to Main Menu < /button> <
        /div>
    );
};

export default SplashScreen;