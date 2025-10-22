import styles from './Dashboard.module.css'
import Header from '../Header/Header'
import Clock from '../Clock/Clock'
import WeatherWidget from '../WeatherWidget/WeatherWidget'
import TaskCounter from '../TaskCounter/TaskCounter'
import FocusTimer from '../FocusTimer/FocusTimer'

const Dashboard = () => {

    
    return(
        <div className={styles.dashboard}>
        <Header/>
        <main className={styles.gridContainer}>
            <aside className={styles.qol}>
                <Clock />
                <WeatherWidget />
            </aside>
            <section className={styles.productivity}>
                <TaskCounter />
            </section>
        </main>
        <FocusTimer />
        </div>


    )
}


export default Dashboard