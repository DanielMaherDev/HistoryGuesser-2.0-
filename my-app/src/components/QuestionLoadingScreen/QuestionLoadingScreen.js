import React, {
    useState,
    useEffect
} from 'react';
import './QuestionLoadingScreen.css';

const QuestionLoadingScreen = ({
    onForceStart,
    imageLoaded
}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                console.log('Progress:', prevProgress); // Debugging log
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log('Image Loaded and Progress:', imageLoaded, progress); // Debugging log
        if (imageLoaded && progress >= 100) {
            onForceStart();
        }
    }, [imageLoaded, progress, onForceStart]);

    useEffect(() => {
        console.log('Progress:', progress); // Debugging log
        if (progress >= 100) {
            onForceStart();
        }
    }, [progress, onForceStart]);

    return ( <
        div className = "loading-screen" >
        <
        div className = "loading-bar" >
        <
        div className = "loading-progress"
        style = {
            {
                width: `${progress}%`
            }
        } >
        <
        /div> <
        /div> <
        button className = "force-start-button"
        onClick = {
            onForceStart
        } >
        Start Now <
        /button> <
        /div>
    );
};

export default QuestionLoadingScreen;