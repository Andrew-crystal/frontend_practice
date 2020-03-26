import React from "react"
import Draggable from "../shared/Draggable"

const Completed = (({ tasks, createDragStart, createOnDrop, onDragOver }) =>
  <div
    className="completed"
    onDragOver={onDragOver}
    onDrop={createOnDrop("Completed")}
  >
    <h3>Completed</h3>
    {
      tasks
        .completedTasks()
        .map((task, index) => {
          return(
            <Draggable
              key={index}
              task={task}
              createDragStart={createDragStart}
            />
          )
        })
    }
  </div>
)

export default Completed