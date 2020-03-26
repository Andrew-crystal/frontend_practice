const generateTask = (id, name, status, color) => {
  return {
    id,
    name,
    status,
    color
  }
}

export const defaultTasks = [
  generateTask(1, "File Taxes", "Completed", "red"),
  generateTask(2, "Download Apex", "Completed", "blue"),
  generateTask(3, "Update Resume", "In Progress", "red"),
  generateTask(4, "Finish Potluck Project", "In Progress", "green")
]