import { getData, saveData } from "../components/LocalStorage";

export default class TodoModel {
  constructor(id, title, desc, scheduleTime, isCompleted) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.scheduleTime = scheduleTime;
    this.isCompleted = isCompleted;
  }

  addNewTask(id) {
    let getUuid =
      new Date().getTime().toString() + Math.floor(Math.random() * 1000000);
    let data = getData();
    let newTask = new TodoModel(
      getUuid,
      this.title,
      this.desc,
      this.scheduleTime,
      this.isCompleted
    );
    const index = data.findIndex((item) => item.id === id);
    data[index].taskList.push(newTask);
    saveData(data);
  }
  removeTask(id) {
    let data = getData();
    const index = data.findIndex((item) => item.id === id);
    let taskList = data[index].taskList;
    console.log(taskList);
    const taskIndex = taskList.findIndex((item) => item.id === this.id);
    console.log(taskIndex);
    taskList.splice(taskIndex, 1);
    saveData(data);
  }
}
