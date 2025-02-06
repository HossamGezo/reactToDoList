import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Toast
const notify = (message) => {
  toast(message);
};

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

const TasksProvider = ({children}) => {
  const [tasks, setTasks] = useState(tasksLocal);
  const [doneTasks, setDoneTasks] = useState(doneTasksLocal);
  const [showDel, setShowDel] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const allTasks = [...tasks, ...doneTasks];

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
  }, [tasks, doneTasks]);

  return (
    <>
      <tasksLocalProvider.Provider
        value={{
          currentTask,
          setCurrentTask,
          showEdit,
          setShowEdit,
          showDel,
          setShowDel,
          tasks,
          setTasks,
          doneTasks,
          setDoneTasks,
          allTasks,
          notify
        }}
      >
        {children}
      </tasksLocalProvider.Provider>
    </>
  );
};

export default TasksProvider;

export const useTasksProvider = () => {
  return useContext(tasksLocalProvider);
};
