import React, { useState, useEffect, useRef, useCallback } from 'react';
import './AppleCatcher.css';
import goodAppleImg from './img/good-apple.png';
import rottenAppleImg from './img/rotten-apple.png';
import catcherImg from './img/catcher.png';
import backgroundMusic from './audio/background-music.mp3';
import buttonClickSound from './audio/button-click.mp3';

const AppleCatcher = ({ onGameOver }) => {
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(60);
    const [apples, setApples] = useState([]);
    const [playerPosition, setPlayerPosition] = useState(50);
    const [gameStarted, setGameStarted] = useState(false);
    const [scoreAnimations, setScoreAnimations] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const backgroundMusicRef = useRef(new Audio(backgroundMusic));
    const buttonClickSoundRef = useRef(new Audio(buttonClickSound));
    const gameLoopRef = useRef(null);

    const checkCollisions = useCallback(() => {
        setApples((prevApples) =>
            prevApples.filter((apple) => {
                if (
                    apple.y > 70 &&
                    apple.y < 85 &&
                    Math.abs(apple.x - playerPosition) < 15
                ) {
<<<<<<< HEAD
                    const scoreChange = apple.type === 'good' ? 10 : -20;
                    setScore((prevScore) => prevScore + scoreChange);
                    
                    const animationId = Date.now();
                    setScoreAnimations((prev) => [...prev, {
=======
                    const scoreChange = apple.type === 'good' ? 10 : -10;
                    setScore((prevScore) => prevScore + scoreChange);
                    
                    const animationId = Date.now();
                    setScoreAnimations(prev => [...prev, {
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
                        id: animationId,
                        x: apple.x,
                        y: apple.y,
                        score: scoreChange
                    }]);
                    
<<<<<<< HEAD
                    // Remove animation after 1 second
                    setTimeout(() => {
                        setScoreAnimations((prev) => prev.filter(anim => anim.id !== animationId));
                    }, 1000);
=======
                    setTimeout(() => {
                        setScoreAnimations(prev => prev.filter(anim => anim.id !== animationId));
                    }, 500);
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4

                    return false;
                }
                return apple.y < 100;
            })
        );
    }, [playerPosition]);

    const gameLoop = useCallback(() => {
        setApples((prevApples) => {
            const newApples = prevApples.map((apple) => ({
                ...apple,
<<<<<<< HEAD
                y: apple.y + 0.5,
            }));
    
            if (Math.random() < 0.01 && newApples.length < 5) { // Увеличена вероятность появления яблок
=======
                y: apple.y + 0.5, // Уменьшаем скорость падения
            }));

            if (Math.random() < 0.02 && newApples.length < 10) { // 2% шанс добавления нового яблока
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
                newApples.push({
                    id: Date.now(),
                    x: Math.random() * 100,
                    y: 0,
<<<<<<< HEAD
                    type: Math.random() > 0.2 ? 'good' : 'rotten', // Увеличена вероятность появления гнилых яблок
                });
            }
    
            return newApples.filter((apple) => apple.y < 100);
        });
    
        checkCollisions();
    
        gameLoopRef.current = requestAnimationFrame(gameLoop);
    }, [checkCollisions]);
    
=======
                    type: Math.random() > 0.2 ? 'good' : 'rotten',
                });
            }

            return newApples.filter((apple) => apple.y < 100);
        });

        checkCollisions();

        gameLoopRef.current = requestAnimationFrame(gameLoop);
    }, [checkCollisions]);
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4

    useEffect(() => {
        backgroundMusicRef.current.loop = true;
        return () => {
            backgroundMusicRef.current.pause();
        };
    }, []);

    useEffect(() => {
        if (gameStarted && time > 0) {
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (time === 0) {
            endGame();
        }
    }, [gameStarted, time]);

    useEffect(() => {
        if (gameStarted) {
            backgroundMusicRef.current.play();
            gameLoopRef.current = requestAnimationFrame(gameLoop);
        } else {
            if (gameLoopRef.current) {
                cancelAnimationFrame(gameLoopRef.current);
            }
            backgroundMusicRef.current.pause();
        }

        return () => {
            if (gameLoopRef.current) {
                cancelAnimationFrame(gameLoopRef.current);
            }
        };
    }, [gameStarted, gameLoop]);

    const playButtonClickSound = () => {
        buttonClickSoundRef.current.currentTime = 0;
        buttonClickSoundRef.current.play();
    };

    const startGame = () => {
        playButtonClickSound();
        setGameStarted(true);
        setScore(0);
        setTime(60);
        setApples([]);
        setShowResult(false);
    };

    const endGame = () => {
        setGameStarted(false);
        setShowResult(true);
        backgroundMusicRef.current.pause();
    };

    const movePlayer = (e) => {
        if (gameStarted) {
<<<<<<< HEAD
            const touch = e.touches[0];
            const newPosition = (touch.clientX / window.innerWidth) * 100;
=======
            const newPosition = (e.clientX / window.innerWidth) * 100;
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
            setPlayerPosition(newPosition);
        }
    };

    const handleResultClose = () => {
        playButtonClickSound();
        setShowResult(false);
        onGameOver(score);
    };

    return (
<<<<<<< HEAD
        <div className="apple-catcher" onTouchMove={movePlayer}>
=======
        <div className="apple-catcher" onMouseMove={movePlayer}>
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
            <div className="game-info">
                <span>Score: {score}</span>
                <span>Time: {time}</span>
            </div>
            {!gameStarted && !showResult && (
                <button className="start-button" onClick={startGame}>Start Game</button>
            )}
            <div className="game-area">
                {apples.map((apple) => (
                    <img
                        key={apple.id}
                        src={apple.type === 'good' ? goodAppleImg : rottenAppleImg}
                        alt={apple.type === 'good' ? 'Good Apple' : 'Rotten Apple'}
                        className="apple"
                        style={{ 
                            left: `${apple.x}%`, 
                            top: `${apple.y}%`,
                            width: '30px',
                            height: 'auto'
                        }}
                    />
                ))}
                {scoreAnimations.map((anim) => (
                    <div
                        key={anim.id}
                        className={`score-animation ${anim.score > 0 ? 'positive' : 'negative'}`}
                        style={{ 
                            left: `${anim.x}%`, 
                            top: `${anim.y}%`,
                            opacity: 1,
<<<<<<< HEAD
                            transform: 'translateY(-20px)',
                            transition: 'opacity 1s, transform 1s'
                        }}
                    >
                        {anim.score > 0 ? `+${Math.abs(anim.score)}` : `${Math.abs(anim.score)}`}
=======
                            transform: 'translateY(-20px)'
                        }}
                    >
                        {anim.score > 0 ? '+10' : '-10'}
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
                    </div>
                ))}
                <img
                    src={catcherImg}
                    alt="Catcher"
                    className="player"
                    style={{ 
                        left: `${playerPosition}%`,
                        width: '90px',
                        height: '90px'
                    }}
                />
            </div>
            {showResult && (
                <div className="result-modal">
                    <div className="result-content">
<<<<<<< HEAD
                        <h2>Game end!</h2>
=======
                        <h2>Game Over!</h2>
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
                        <p>Your score: {score}</p>
                        <button onClick={handleResultClose}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

<<<<<<< HEAD
export default AppleCatcher;
=======
export default AppleCatcher;
>>>>>>> f461477c2c31bf26dc68844b7394ce17e9ffddc4
