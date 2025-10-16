import styles from './MiniDayIcon.module.css'

const MiniDayIcon = ({day, icon, temp_min, temp_max}) => {

    return (
        <div className={styles.miniIcon}>
            <p>{day}</p>
            <img src={icon} alt="Weather Icon"/>
            <p>{temp_min}</p>
            <p>{temp_max}</p>
        </div>
    )


}


export default MiniDayIcon