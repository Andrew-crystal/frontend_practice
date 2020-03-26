import Task from "./Task"

class Tasks {
  constructor(tasks) {
    this.tasks = tasks
  }

  static fromExternalized(tasks) {
    const generatedTasks = tasks.map((task) => Task.fromExternalized(task))
    const generated = new Tasks(generatedTasks)
    return generated
  }

  externalize() {
    return this.tasks.map((task) => task.externalize())
  }

  completedTasks() {
    return this.tasks.filter((task) => task.isCompleted())
  }

  inProgressTasks() {
    return this.tasks.filter((task) => !task.isCompleted())
  }

  updateTaskStatus(name, status) {
    const task = this.tasks.find((t) => t.name === name)
    if (task) task.updateStatus(status)
  }
}

export default Tasks