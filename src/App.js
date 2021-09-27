import Scheduler from "./components//Scheduler";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  let myTodos = [
    {
      day: "Sunday",
      date: "26/09/2021",
      id: "14558",
      imgUrl:
        "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      taskList: [
        {
          title: "To Buy Iphone",
          desc: "want to buy a iphone to get going with life",
          id: "12458",
          scheduleTime: "Today 10 am",
          notes: "loremfjgvlkflgvldnfvdlb;kh",
          isCompleted: false
        },
        {
          title: "To Buy Iphone",
          desc: "want to buy a iphone to get going with life",
          id: "12458",
          scheduleTime: "Today 10 am",
          notes: "loremfjgvlkflgvldnfvdlb;kh",
          isCompleted: false
        },
        {
          title: "To Buy Iphone",
          desc: "want to buy a iphone to get going with life",
          id: "12458",
          scheduleTime: "Today 10 am",
          notes: "loremfjgvlkflgvldnfvdlb;kh",
          isCompleted: false
        },
      ],
    },
    {
      day: "Monday",
      date: "27/09/2021",
      id: "145758",
      imgUrl:
        "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
      taskList: [
        {
          title: "To Buy Iphone",
          desc: "want to buy a iphone to get going with life",
          id: "12458",
          scheduleTime: "Today 10 am",
          notes: "loremfjgvlkflgvldnfvdlb;kh",
          isCompleted: false
        },
        {
          title: "To Buy Iphone",
          desc: "want to buy a iphone to get going with life",
          id: "1245458",
          scheduleTime: "Today 10 am",
          notes: "loremfjgvlkflgvldnfvdlb;kh",
          isCompleted: false
        },
        {
          title: "To Buy Iphone",
          desc: "want to buy a iphone to get going with life",
          id: "124558",
          scheduleTime: "Today 10 am",
          notes: "loremfjgvlkflgvldnfvdlb;kh",
          isCompleted: false
        },
      ],
    },
    {
      day: "Tueday",
      date: "28/09/2021",
      id: "12448",
      imgUrl:
        "https://images.unsplash.com/photo-1554147090-e1221a04a025?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1148&q=80",
      taskList: [
        {
          title: "To Buy Iphone",
          desc: "want to buy a iphone to get going with life",
          id: "12458",
          scheduleTime: "Today 10 am",
          notes: "loremfjgvlkflgvldnfvdlb;kh",
          isCompleted: false
        },
        {
          title: "To Buy Iphone",
          desc: "want to buy a iphone to get going with life",
          id: "12458",
          scheduleTime: "Today 10 am",
          notes: "loremfjgvlkflgvldnfvdlb;kh",
          isCompleted: false
        },
        {
          title: "To Buy Iphone",
          desc: "want to buy a iphone to get going with life",
          id: "12458",
          scheduleTime: "Today 10 am",
          notes: "loremfjgvlkflgvldnfvdlb;kh",
          isCompleted: false
        },
      ],
    },
  ];

  return (
    <>
      <Scheduler todos={myTodos} />
      <Footer />
    </>
  );
}

export default App;
