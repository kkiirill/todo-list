import { useState } from 'react'
import './TaskForm.css'

const TaskForm = ({ addTask }) => {
    const [taskInput, setTaskInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(taskInput)
        setTaskInput('')
   }

   const handlePress = (e) => {
       if (e.key === 'Enter') {
           handleSubmit(e)
       }
   }

   const handleChange = (e) => {
       setTaskInput(e.currentTarget.value)
   }

   return (
       <form className="form" onClick={handleSubmit}>
           <input
                type="text"
                value={taskInput}
                className="form-item"
                placeholder='what needs to be done?'
                onKeyDown={handlePress}
                onChange={handleChange}
           />
           <button className="button">
               +
           </button>
       </form>
   )
}

export default TaskForm;