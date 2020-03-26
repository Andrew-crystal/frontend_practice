class Task {
  constructor(id, name, status, color) {
    this.id = id
    this.name = name
    this.status = status
    this.color = color
  }

  static fromExternalized({ id, name, status, color }) {
    return new Task(id, name, status, color)
  }

  isCompleted() {
    return this.status === "Completed"
  }

  updateStatus(status) {
    this.status = status
  }

  externalize() {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      color: this.color
    }
  }
}

export default Task