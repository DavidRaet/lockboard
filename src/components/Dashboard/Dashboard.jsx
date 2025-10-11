import { useState } from "react"
import styles from './Dashboard.module.css'
import Header from '../Header/Header'
import Clock from '../Clock/Clock'
import WeatherWidget from '../WeatherWidget/WeatherWidget'
import TaskCounter from '../TaskCounter/TaskCounter'
import FocusTimer from '../FocusTimer/FocusTimer'

const Dashboard = () => {
    const [user, setUser] = useState('User')
    const [tasks, setTasks] = useState([                                                         
        {id: 1, name: 'Learn React', completed: false},
        {id: 2, name: 'Build Dashboard', completed: true}
    ])

    
    return(
        <div className={styles.dashboard}>
        <Header userName={user} />
        <main className={styles.gridContainer}>
            <aside className={styles.qol}>
                <Clock />
                <WeatherWidget />
            </aside>
            <section className={styles.productivity}>
                <TaskCounter tasks={tasks} />
            </section>
        </main>
        <FocusTimer />
        </div>


    )
}


export default Dashboard