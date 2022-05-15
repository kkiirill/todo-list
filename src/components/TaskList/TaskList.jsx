import './TaskList.css';

const TaskList = ({ task, removeTask, handleToggle}) => {
    return (
        <div 
            className="item"
            key={task.id} 
        >
            <div className={task.complete ? "item-task none" : "item-task"} onClick={() => handleToggle(task.id)} >
                {task.task}
            </div>
            <button onClick={() => removeTask(task.id)} className="button-remove">
                    X
            </button>

         </div>
    )
}

export default TaskList;