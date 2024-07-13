// src/App.js
import React, {
    useState
} from 'react';
import SplashScreen from './pages/SplashScreen';
import MainMenu from './pages/MainMenu';

const App = () => {
        const [currentView, setCurrentView] = useState('splash');
        const [selectedPack, setSelectedPack] = useState(null);

        const handleTransition = (pack) => {
            setSelectedPack(pack);
            setCurrentView('main-menu');
        };

        return ( <
                div > {
                    currentView === 'splash' && < SplashScreen onTransition = {
                        handleTransition
                    }
                    />} {
                        currentView === 'main-menu' && < MainMenu selectedPack = {
                            selectedPack
                        }
                        />} <
                        /div>
                    );
                };

                export default App;