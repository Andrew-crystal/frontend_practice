import React from "react"

const Draggable = (({ task, createDragStart }) =>
  <div
    draggable="true"
    className="draggable"
    onDragStart={createDragStart(task.name)}
    style={{ backgroundColor: task.color }}
  >
    {task.name}
  </div>
)

export default Draggable