import { useState } from 'react'
import  './App.css'
import Header  from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (taskInput) => {
    if (taskInput) {
      const item = {
        id: Math.random().toString(36).substring(2, 9),
        task: taskInput,
        complete: false,
      }

      setTasks([...tasks, item])
    }
  }

  const removeTask = (id) => {
    setTasks([...tasks].filter((task) => {
      return (
        task.id !== id
      )
    }))
  }

  const handleToggle = (id) => {
    setTasks([...tasks].map((task) => 
      task.id === id ? {...task, complete: !task.complete} : {...task}
    )
  )}

  return (
    <div className="app">
      <Header tasks={tasks} addTask={addTask} />

      {tasks.map((task) => {
        return (
          <TaskList
            key={task.id}
            task={task}
            removeTask={removeTask}
            handleToggle={handleToggle}
          />
        )
      })}
    </div>
  )
}

export default App