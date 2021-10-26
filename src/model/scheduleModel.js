import { getData, saveData } from '../components/LocalStorage';

export default class Schedule {
  constructor(id, title, day, date, imgUrl, taskList) {
    this.title = title;
    this.date = date;
    this.day = day;
    this.id = id;
    this.imgUrl = imgUrl;
    this.taskList = taskList;
  }

  addNewSchedule() {
    const getUuid = new Date().getTime().toString() + Math.floor(Math.random() * 1000000);
    const data = getData();
    const newTask = new Schedule(
      getUuid,
      this.title,
      this.day,
      this.date,
      'https://images.unsplash.com/photo-1554147090-e1221a04a025?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1148&q=80',
      [],
    );
    data.push(newTask);
    saveData(data);
  }

  removeSchedule() {
    const data = getData();
    const index = data.findIndex((item) => item.id === this.id);
    data.splice(index, 1);
    saveData(data);
  }
}
