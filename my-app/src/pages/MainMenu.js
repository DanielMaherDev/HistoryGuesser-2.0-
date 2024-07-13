// src/pages/MainMenu.js
import React from 'react';

const MainMenu = ({
        selectedPack
    }) => {
        return ( <
            div className = "main-menu" >
            <
            h1 > Main Menu < /h1> {
                selectedPack && < p > Selected Pack: {
                        selectedPack
                    } < /p>} {
                        /* Menu content goes here */ } <
                    /div>
            );
        };

        export default MainMenu;