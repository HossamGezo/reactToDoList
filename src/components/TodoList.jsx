import Button from "@mui/material/Button";
import "../styles/TodoList.css";
import Tasks from "./Tasks";
import {useState} from "react";
import {TasksProvider} from "../App";

const TodoList = () => {
  const {setTasks} = TasksProvider();
  const [inputTask, setInputTask] = useState("");
  const [controlTabs, setControlTabs] = useState({
    allTasks: false,
    doneTasks: false,
    tasks: true,
  });

  const addTask = () => {
    setTasks((prev) => [
      ...prev,
      {id: crypto.randomUUID(), title: "", desc: inputTask},
    ]);
    setInputTask("");
  };

  function activeTabs(e) {
    const eles = document.querySelectorAll(".tabs li");
    eles.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
  }

  function handleAllTasks(e) {
    setControlTabs({
      allTasks: true,
      doneTasks: false,
      tasks: false,
    });
    activeTabs(e);
  }

  function handleDoneTaks(e) {
    setControlTabs({
      allTasks: false,
      doneTasks: true,
      tasks: false,
    });
    activeTabs(e);
  }

  function handleTasks(e) {
    setControlTabs({
      allTasks: false,
      doneTasks: false,
      tasks: true,
    });
    activeTabs(e);
  }

  return (
    <>
      <div className="container">
        <div className="todolist">
          <h1 className="todolist__title">مهامي</h1>
          <ul className="tabs">
            <li onClick={handleAllTasks}>الكل</li>
            <li onClick={handleDoneTaks}>منجز</li>
            <li className="active" onClick={handleTasks}>
              غير منجز
            </li>
          </ul>
          {controlTabs.allTasks && <Tasks order="allTasks" />}
          {controlTabs.doneTasks && <Tasks order="doneTasks" />}
          {controlTabs.tasks && <Tasks order="tasks" />}
          <div className="actions">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#9A163D",
                padding: "0.8rem 3rem",
                fontFamily: "inherit",
              }}
              onClick={addTask}
            >
              إضافة
            </Button>
            <div className="input__container">
              <input
                type="text"
                required
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                onKeyUp={(e) => e.key === "Enter" && addTask()}
              />
              <p className="input__placeholder">عنوان المهمة</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
