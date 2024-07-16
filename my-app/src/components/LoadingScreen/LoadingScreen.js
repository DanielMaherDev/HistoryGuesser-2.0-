import React from 'react';

const LoadingScreen = ({
    progress
}) => ( <
    div className = "loading-screen" >
    <
    div className = "loading-bar" >
    <
    div className = "progress"
    style = {
        {
            width: `${progress}%`
        }
    } > < /div> < /
    div > <
    p > Loading...{
        progress
    } % < /p> < /
    div >
);

export default LoadingScreen;