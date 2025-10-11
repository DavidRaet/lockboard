import styles from './Clock.module.css'

const Clock = () => {
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div className={styles.clockDial}>
            <div className={styles.point}></div>
            {hours.map((_, i) => (
                <div key={i} className={`${styles.hour} ${styles[`hour${i + 1}`]} `}>
                    {i + 1}
                </div>
            ))}
            <div  className={styles.minuteHandWrapper}>
                <div className={styles.minuteHand}>
                    <div className={styles.hand}></div>
                    <div className={styles.arrow}>V</div>
                </div>
            </div>

            <div className={styles.hourHandWrapper}>
                <div className={styles.hourHand}>
                    <div className={styles.otherHand}></div>
                    <div className={styles.otherArrow}>V</div>
                </div>
            </div>

            <div className={styles.secondHandWrapper}>
                <div className={styles.secondHand}>
                    <div className={styles.singleHand}></div>
                </div>
            </div>
            
        </div>
    )
}


export default Clock