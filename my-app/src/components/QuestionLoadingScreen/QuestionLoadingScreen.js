// src/components/QuestionLoadingScreen/QuestionLoadingScreen.js
import React, {
    useState,
    useEffect
} from 'react';
import './QuestionLoadingScreen.css';

const QuestionLoadingScreen = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + 1;
                } else {
                    clearInterval(intervalId);
                    return 100;
                }
            });
        }, 50);

        return () => clearInterval(intervalId);
    }, []);

    return ( <
        div className = "question-loading-screen" >
        <
        div className = "progress-bar" >
        <
        div className = "progress"
        style = {
            {
                width: `${progress}%`
            }
        } > < /div> <
        /div> <
        div className = "loading-text" > Loading... < /div> <
        /div>
    );
};

export default QuestionLoadingScreen;