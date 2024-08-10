import React, { useState, useEffect } from 'react';
import '../css/app.css'; 
import UniverseSwitcher from './components/UniverseSwitcher';
import EatsApp from './Universes/EWI/EatsApp';
import EWE from './Universes/EWE/EWE';
import EcoGame from './Universes/ECI/EcoGame';

function App() {
<<<<<<< HEAD
  const [currentUniverse, setCurrentUniverse] = useState('EatsApp');

  useEffect(() => {
    if (window.TelegramWebApps) {
      window.TelegramWebApps.ready();
      
      // Пример использования Telegram Web App API
      window.TelegramWebApps.onEvent('backButtonClicked', () => {
        console.log('Back button clicked');
      });

      // Пример получения данных из Telegram Web App
      console.log(window.TelegramWebApps.initData);
    }
=======
  const [loading, setLoading] = useState(true);
  const [currentUniverse, setCurrentUniverse] = useState('EatsApp');

  useEffect(() => {
    const loadContent = async () => {
      const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

      console.log('Start loading...'); // Отладочное сообщение
      await wait(4000); // Задержка на 4 секунды
      console.log('Loading complete'); // Отладочное сообщение

      setLoading(false);
    };

    loadContent();
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
  }, []);

  const renderGame = () => {
    switch (currentUniverse) {
      case 'EatsApp':
        return <EatsApp />;
      case 'First':
        return <EWE />;
      case 'EcoGame':
        return <EcoGame />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <UniverseSwitcher currentUniverse={currentUniverse} setCurrentUniverse={setCurrentUniverse} />
        {renderGame()}
      </header>
=======
      {loading ? (
        <div className="loading-screen">
          <img src="/load-image-3.png" alt="Loading..." />
        </div>
      ) : (
        <header className="App-header">
          <UniverseSwitcher currentUniverse={currentUniverse} setCurrentUniverse={setCurrentUniverse} />
          {renderGame()}
        </header>
      )}
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
    </div>
  );
}

export default App;
