import Button from "@mui/material/Button";
import "../styles/TodoList.css";
import Tasks from "./Tasks";
import {useState} from "react";
import {useTasksProvider} from "../context/TasksProvider";
import {Toaster} from "react-hot-toast";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const TodoList = () => {
  const {setTasks, notify} = useTasksProvider();
  const [inputTask, setInputTask] = useState("");
  const [tab, setTab] = useState(1);


  const addTask = () => {
    setTasks((prev) => [
      ...prev,
      {id: crypto.randomUUID(), title: "", desc: inputTask, done: false},
    ]);
    setInputTask("");
    notify("تم اضافه المهمه بنجاح");
  };

  function handleTabs(index) {
    setTab(index);
  }

  return (
    <>
      <div className="container">
        <div className="todolist">
          <h1 className="todolist__title">مهامي</h1>
          <ul className="tabs">
            <li
              onClick={() => handleTabs(3)}
              className={tab === 3 ? "active" : " "}
            >
              الكل
            </li>
            <li
              onClick={() => handleTabs(2)}
              className={tab === 2 ? "active" : " "}
            >
              منجز
            </li>
            <li
              onClick={() => handleTabs(1)}
              className={tab === 1 ? "active" : " "}
            >
              غير منجز
            </li>
          </ul>
          <Tasks order={tab} />
          <div className="actions">
            <Button
              disabled={inputTask ? false : true}
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
      <Toaster
        position={"bottom-left"}
        toastOptions={{
          style: {
            backgroundColor: "green",
            color: "white",
            width: "20px !important"
          },
        }}
      />
    </>
  );
};

export default TodoList;
