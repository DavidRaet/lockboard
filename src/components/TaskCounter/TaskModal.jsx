import styles from './TaskModal.module.css'
import { useState, useEffect } from 'react'

const TaskModal = ({isOpen, onClose, onSubmit}) => {
    const [taskName, setTaskName] = useState('')
    const [taskStatus, setTaskStatus] = useState('not-started')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!taskName.trim()){
            alert('Task name is required.')
            return
        }

        onSubmit({name: taskName, status: taskStatus})
        setTaskName('')
        setTaskStatus('not-started')
        onClose()
    }

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen){
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    },[isOpen, onClose])


    if (!isOpen) return null 

    return (
    <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h2>Add New Task</h2>
            <p>Form will go here</p>
            <button onClick={onClose}>Close</button>

        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder='Task name...'
        />
        <select  
        value={taskStatus}
        onChange={(e) => setTaskStatus(e.target.value)}
        >
            <option value="not-started">❌ Not Started</option>
            <option value="in-progress">🟡 In Progress</option>
            <option value="completed">✅ Completed</option>
        </select>
        <button type='submit'>Add Task</button>
        </form>
        </div>
    </div>
    )
}


export default TaskModal