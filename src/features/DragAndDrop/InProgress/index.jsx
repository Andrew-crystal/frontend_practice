import React from "react"
import Draggable from "../shared/Draggable"

const InProgress = (({ tasks, onDragOver, createDragStart, createOnDrop }) =>
  <div
    className="inProgress"
    onDragOver={onDragOver}
    onDrop={createOnDrop("In Progress")}
  >
    <h3>In Progress</h3>
    {
      tasks
        .inProgressTasks()
        .map((task, index) => {
          return (
            <Draggable
              key={index}
              task={task}
              createDragStart={createDragStart}
            />)
        })
    }
  </div>
)

export default InProgress