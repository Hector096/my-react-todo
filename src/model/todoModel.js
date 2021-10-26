import { getData, saveData } from '../components/LocalStorage';

export default class TodoModel {
  constructor(id, title, desc, scheduleTime, isCompleted) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.scheduleTime = scheduleTime;
    this.isCompleted = isCompleted;
  }

  addNewTask(id) {
    const getUuid = new Date().getTime().toString() + Math.floor(Math.random() * 1000000);
    const data = getData();
    const newTask = new TodoModel(
      getUuid,
      this.title,
      this.desc,
      this.scheduleTime,
      this.isCompleted,
    );
    const index = data.findIndex((item) => item.id === id);
    data[index].taskList.push(newTask);
    saveData(data);
  }

  removeTask(id) {
    const data = getData();
    const index = data.findIndex((item) => item.id === id);
    const { taskList } = data[index];
    const taskIndex = taskList.findIndex((item) => item.id === this.id);
    taskList.splice(taskIndex, 1);
    saveData(data);
  }
}
