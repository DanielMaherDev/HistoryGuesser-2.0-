import React, {
    useState
} from 'react';
import SplashScreen from './pages/SplashScreen';
import MainMenu from './pages/MainMenu';
import GameScreen from './components/GameScreen/GameScreen';
import './App.css';

const App = () => {
        const [currentView, setCurrentView] = useState('splash');
        const [selectedPack, setSelectedPack] = useState(null);

        const handleTransition = () => {
            setCurrentView('main-menu');
        };

        const handlePackSelect = (pack) => {
            setSelectedPack(pack);
            setCurrentView('game-screen');
        };

        const handleGameStart = () => {
            setCurrentView('game-screen');
        };

        return ( <
                div className = "page-container" > {
                    currentView === 'splash' && < SplashScreen onTransition = {
                        handleTransition
                    }
                    />} {
                        currentView === 'main-menu' && < MainMenu onPackSelect = {
                            handlePackSelect
                        }
                        />} {
                            currentView === 'game-screen' && ( <
                                GameScreen selectedPack = {
                                    selectedPack
                                }
                                onGameStart = {
                                    handleGameStart
                                }
                                />
                            )
                        } <
                        /div>
                    );
                };

                export default App;