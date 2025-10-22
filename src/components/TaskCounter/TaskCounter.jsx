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
        console.log("Task successfully added!")
    }

    const formatStatus = (status) => {
        switch (status) {
            case 'completed':
                return '✅ Completed' 
            case 'in-progress':
                return '🟡 In Progress'
            default: 
                return '❌ Not Started'
        }
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
            { tasks.length === 0 ? 
            <div className={styles.emptyState} >No tasks yet... Click + Add Task to get started!</div> 
            :
            tasks.map((task) => (
                <div key={task.id} className={styles.taskRow}>
                    <span>{task.name}</span>
                    <span>{formatStatus(task.status)}</span>
                </div>
            ))}
            </div>
            <div className={styles.footer}>
                <p>{tasks.length} {tasks.length === 1 ? "task" : "tasks"} , {tasks.filter(t => t.status === 'completed').length} completed </p>
            </div>
        </div>
    )
}

export default TaskCounter