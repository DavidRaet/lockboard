import styles from './Clock.module.css'
import { useState, useEffect } from 'react'
import { formatClock } from '../../utils/handleClock'
import { formatDate } from '../../utils/handleClock'
const Clock = () => {
    const [time, setTime] = useState(new Date())
    const formattedTime = formatClock(time)
    const formattedDate = formatDate(time)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])
    
    return (
        <div className={styles.clockContainer}>
            <div className={styles.timeDisplay}>
                {formattedTime}
            </div>
            <div className={styles.dateDisplay}>
                {formattedDate}
            </div>
        </div>
    )
}


export default Clock