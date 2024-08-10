import React, { useState, useEffect } from 'react';
import Score from './comp/Score';
import './css/EWE.css'
import FarmButton from './comp/FarmButton';

function Ewe() {
<<<<<<< HEAD
  const [tokens, setTokens] = useState(() => {
    const savedTokens = localStorage.getItem('tokens');
    return savedTokens ? parseFloat(savedTokens) : 0;
  });

  const [farmedTokens, setFarmedTokens] = useState(() => {
    const savedFarmedTokens = localStorage.getItem('farmedTokens');
    return savedFarmedTokens ? parseFloat(savedFarmedTokens) : 0;
  });

  const [isFarming, setIsFarming] = useState(() => {
    const savedIsFarming = localStorage.getItem('isFarming');
    return savedIsFarming === 'true';
  });

  const [startTime, setStartTime] = useState(() => {
    const savedStartTime = localStorage.getItem('startTime');
    return savedStartTime ? new Date(parseInt(savedStartTime, 10)) : null;
  });

  const [elapsedFarmingTime, setElapsedFarmingTime] = useState(() => {
    const savedElapsedFarmingTime = localStorage.getItem('elapsedFarmingTime');
    return savedElapsedFarmingTime ? parseFloat(savedElapsedFarmingTime) : 0;
  });
=======
  const [tokens, setTokens] = useState(0);
  const [farmedTokens, setFarmedTokens] = useState(0);
  const [isFarming, setIsFarming] = useState(false);
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4

  useEffect(() => {
    let farmingInterval;
    if (isFarming) {
<<<<<<< HEAD
      const maxTokens = 32;
      const duration = 3 * 60 * 60 * 1000;
      const interval = duration / (maxTokens * 1000);

      farmingInterval = setInterval(() => {
        const now = new Date();
        const elapsed = (now - startTime) / 1000;
        const farmed = Math.min((elapsed + elapsedFarmingTime) * 0.001, maxTokens);
        setFarmedTokens(farmed);
=======
      let farmed = 0; 
      const maxTokens = 32;
      const duration = 3 * 60 * 60 * 1000;
      const interval = duration / (maxTokens * 1000); 

      farmingInterval = setInterval(() => {
        farmed += 0.001;
        setFarmedTokens(Number(farmed.toFixed(3)));
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4

        if (farmed >= maxTokens) {
          clearInterval(farmingInterval);
          setIsFarming(false);
<<<<<<< HEAD
          setElapsedFarmingTime(0);
=======
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
        }
      }, interval);
    }

    return () => clearInterval(farmingInterval);
<<<<<<< HEAD
  }, [isFarming, startTime, elapsedFarmingTime]);

  useEffect(() => {
    localStorage.setItem('tokens', tokens);
    localStorage.setItem('farmedTokens', farmedTokens);
    localStorage.setItem('isFarming', isFarming);
    localStorage.setItem('startTime', startTime ? startTime.getTime() : null);
    localStorage.setItem('elapsedFarmingTime', elapsedFarmingTime);
  }, [tokens, farmedTokens, isFarming, startTime, elapsedFarmingTime]);
=======
  }, [isFarming]);
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4

  const handleButtonClick = () => {
    if (isFarming) {
      collectTokens();
    } else {
      startFarming();
    }
  };

  const startFarming = () => {
    if (!isFarming) {
<<<<<<< HEAD
      const now = new Date();
      setStartTime(now);
      setIsFarming(true);
      setElapsedFarmingTime(farmedTokens / 0.001); 
      setFarmedTokens(0);
=======
      setIsFarming(true);
      setFarmedTokens(0); 
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
    }
  };

  const collectTokens = () => {
<<<<<<< HEAD
    if (farmedTokens >= 32) {
=======
    if (farmedTokens >= 32) { 
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
      setTokens(prevTokens => Number((prevTokens + farmedTokens).toFixed(3)));
      setFarmedTokens(0);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <Score tokens={tokens} />
      </header>
      <div className="content">
        <FarmButton
          isFarming={isFarming}
          farmedTokens={farmedTokens}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
}

export default Ewe;
