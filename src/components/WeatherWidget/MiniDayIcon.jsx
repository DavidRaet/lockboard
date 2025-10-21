import styles from './MiniDayIcon.module.css'

const MiniDayIcon = ({day, icon: iconURL, temp_min, temp_max}) => {
    return (
        <div className={styles.miniIcon}>
            <p>{day}</p>
            <img src={iconURL} alt="Weather Icon"/>
            <p>Low: {temp_min}</p>
            <p>High: {temp_max}</p>
        </div>
    )


}


export default MiniDayIcon