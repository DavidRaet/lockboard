import styles from './TaskCounter.module.css'
import { useState } from 'react'
import TaskModal from './TaskModal'

const TaskCounter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingTask, setEditingTask] = useState(null)
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

    const handleStatusChange = (taskId, newStatus) => {
        setTasks(tasks.map((task) => task.id === taskId ? {...task, status: newStatus} : task))
    }

    const handleDeleteTask = (taskId) => {
        const newTasksArray = tasks.filter(task => task.id !== taskId)
        setTasks(newTasksArray)
    }

    const handleEditTask = (taskData) => {
        const newTasks = tasks.map((task) => editingTask.id === task.id ? {...task, ...taskData} : task) 
        setTasks(newTasks)
        setEditingTask(null)
        setIsModalOpen(false)
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
                <button className={styles.addButton} onClick={() => {
                    setEditingTask(null)
                    setIsModalOpen(true)
                }}>+ Add Task</button>

            </div>
                <div className={styles.taskCategories}>
                    <span>Name</span>
                    <span>Status</span>
                    <span>Delete Task</span>
                </div>            
            <TaskModal
            isOpen={isModalOpen}
            onClose={() => {
                setIsModalOpen(false) 
                setEditingTask(null)
            }}
            onSubmit={editingTask ? handleEditTask : handleAddTask}
            task={editingTask}
            />
            
            <div className={styles.taskList}>
            { tasks.length === 0 ? 
            <div className={styles.emptyState} >No tasks yet... Click + Add Task to get started!</div> 
            :
            tasks.map((task) => (
                <div key={task.id} className={styles.taskRow}>
                    <span style={{cursor: 'pointer'}} onClick={() => {
                        setEditingTask(task)
                        setIsModalOpen(true)
                    }} >{task.name}</span>
                    <select value={task.status} onChange={(e) => handleStatusChange(task.id, e.target.value)} >
                        <option value='completed'>✅ Completed</option>
                        <option value='in-progress'>🟡 In Progress</option>
                        <option value='not-started'>❌ Not Started</option>
                    </select>
                    <button className={styles.deleteButton} onClick={() => handleDeleteTask(task.id)} aria-label='Delete task' >×</button>
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