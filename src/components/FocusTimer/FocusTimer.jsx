import styles from './FocusTimer.module.css'
import { useState, useEffect } from 'react'
import { formatTime } from '../../utils/handleClock'


const FocusTimer = () => {
    const [timeLeft, setTimeLeft] = useState(() => {
        const saved = localStorage.getItem('focusTimerTimeLeft')
        return saved ? parseInt(saved) : 25 * 60
    })
    const [isRunning, setIsRunning] = useState(() => {
        const saved = localStorage.getItem('focusTimerIsRunning')
        return saved === 'true' 
    })
    const [isComplete, setIsComplete] = useState(false)

    const playSound = () => {
        const audio = new Audio('/FocusTimer.mp3')
        audio.play().catch(err => console.log('Audio failed to play:', err))
    }

    const handleStartPause = () => {
        setIsRunning(!isRunning)
    }
    

    const handleReset = () => {
        setIsRunning(false)
        setTimeLeft(25 * 60)
        setIsComplete(false)
    }


    useEffect(() => {
        if (!isRunning) return 
        if (timeLeft <= 0) return

        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1){
                    setIsRunning(false)
                    setIsComplete(true)
                    playSound()
                    return 0 
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(interval)
    },[isRunning])

    useEffect(() => {
        localStorage.setItem('focusTimerTimeLeft', timeLeft.toString())
    }, [timeLeft])

    useEffect(() => {
        localStorage.setItem('focusTimerIsRunning', isRunning.toString())
    }, [isRunning])


    return (
        <div className={styles.focusTimerContainer}>
            <h2 className={styles.title}>Lock In.</h2>
            <div className={styles.timerDisplay}>
                {formatTime(timeLeft)}
            </div>
            <div className={styles.controls}>
            <button className={styles.startButton} onClick={handleStartPause} >
                {isRunning ? '⏸ Pause' : '▶ Start' }
            </button>
            <button className={styles.resetButton} onClick={handleReset}>
                🔄 Reset
            </button>
            </div>

            {isComplete && (
                <h3 className={styles.completeMessage}>Focus session complete! Time for a break.</h3>
            )}
        </div>
    )
}

export default FocusTimer