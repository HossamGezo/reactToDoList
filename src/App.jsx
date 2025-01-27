import {createContext, useContext, useEffect, useState} from "react";
import "./App.css";
import TodoList from "./components/TodoList";

// --------------------------------------------------

const tasks = [
  {
    id: 1,
    title: "قراءة كتاب",
    desc: "الإنجاز قبل نهاية الشهر",
    done: false,
  },
  {
    id: 2,
    title: "لايوجد عنوان",
    desc: "إنهاء كورس ريأكت",
    done: false,
  },
  {
    id: 3,
    title: "لايوجد عنوان",
    desc: "فهم تفاصيل ال async و ال await في الجافاسكريبت",
    done: false,
  },
];

const doneTasks = [];

const tasksLocal = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : tasks;

const doneTasksLocal = localStorage.getItem("doneTasks")
  ? JSON.parse(localStorage.getItem("doneTasks"))
  : doneTasks;

const tasksLocalProvider = createContext();

// --------------------------------------------------

function App() {
  const [tasks, setTasks] = useState(tasksLocal);
  const [doneTasks, setDoneTasks] = useState(doneTasksLocal);
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [id, setId] = useState(1);

  const allTasks = [...tasks, ...doneTasks];

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [tasks, doneTasks]);

  return (
    <>
      <tasksLocalProvider.Provider
        value={{
          id,
          setId,
          showEdit,
          setShowEdit,
          showDel,
          setShowDel,
          tasks,
          setTasks,
          doneTasks,
          setDoneTasks,
          allTasks,
        }}
      >
        <TodoList />
      </tasksLocalProvider.Provider>
    </>
  );
}

export default App;

export const TasksProvider = () => {
  return useContext(tasksLocalProvider);
};
