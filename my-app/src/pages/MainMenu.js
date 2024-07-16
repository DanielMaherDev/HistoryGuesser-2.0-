import React from 'react';

const MainMenu = ({
    onPackSelect
}) => {
    return ( <
        div className = "main-menu" >
        <
        h1 > Main Menu < /h1> <
        button onClick = {
            () => onPackSelect('irishWarHistory')
        } > Enter Irish War History < /button> {
            /* Add more buttons for other packs here */ } <
        /div>
    );
};

export default MainMenu;