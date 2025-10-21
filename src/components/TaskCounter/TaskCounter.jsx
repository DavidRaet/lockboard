import styles from './TaskCounter.module.css'
import { useState } from 'react'
import TaskModal from './TaskModal'

const TaskCounter = ( ) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [tasks, setTasks] = useState([{id: 1, name: 'learning', status: 'not-started'}])

    const handleAddTask = (taskData) => {
        const newTask = 
        {
            id: Date.now(), 
            ...taskData
        }
        setTasks([...tasks, newTask])
    }

    return (
        <div className={styles.taskCounter}>
            <div className={styles.header}>
                <h1>Tasks</h1>
                <button className={styles.addButton} onClick={() => setIsModalOpen(true)}>+ Add Task</button>
            </div>
            
            <TaskModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddTask}
            />
            
            <div className={styles.taskList}>
                <div className={styles.taskHeader}>
                    <span>Name</span>
                    <span>Status</span>
            </div>
            </div>
        </div>
    )
}

export default TaskCounter