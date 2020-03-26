import React, { useState } from "react"
import { defaultTasks } from "./data"
import Tasks from "./Tasks"

import Completed from "./Completed"
import InProgress from "./InProgress"

const DragAndDrop = () => {
  const [rawTasks, setRawTasks] = useState(defaultTasks)
  const tasks = Tasks.fromExternalized(rawTasks)

  const createDragStart = (name) => {
    return (e) => e.dataTransfer.setData("name", name)
  }

  const onDragOver = (e) => e.preventDefault()

  const createOnDrop = (newStatus) => {
    return (e) => {
      e.preventDefault()
      const name = e.dataTransfer.getData("name")
      tasks.updateTaskStatus(name, newStatus)
      setRawTasks(tasks.externalize())
    }
  }


  return (
    <div className="dndContainer" >
      <h2>Drag and Drop</h2>
      <InProgress
        tasks={tasks}
        onDragOver={onDragOver}
        createDragStart={createDragStart}
        createOnDrop={createOnDrop}
      />
      <Completed
        tasks={tasks}
        onDragOver={onDragOver}
        createDragStart={createDragStart}
        createOnDrop={createOnDrop}
      />
    </div>
  )
}

export default DragAndDrop