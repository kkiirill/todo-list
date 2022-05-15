import TaskForm from '../TaskForm/TaskForm'
import './Header.css'

const Header = ({ tasks, addTask }) => {
    return (
        <div className="header">
            <h1> My Tasks: {tasks.length} </h1>
            <TaskForm addTask={addTask} />
        </div>
    )
}

export default Header