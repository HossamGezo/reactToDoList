import Button from "@mui/material/Button";
import {useState} from "react";
import {TasksProvider} from "../App";
import "../styles/PopUp.css";

// ---------------------------------------------

const EditPopUp = ({type}) => {
  const { id, tasks, setTasks, doneTasks,allTasks, setDoneTasks, setShowEdit } = TasksProvider();

  let current;
  if (type === "tasks") {
    current = tasks.find((task) => {
      return task.id === id;
    });
  } else if (type === "doneTasks") {
    current = doneTasks.find((task) => {
      return task.id === id;
    });
  } else {
    let status = allTasks.filter((task) => {
      return task.id === id;
    });
    status = status[0].done;
    if (!status) {
      current = tasks.find((task) => {
        return task.id === id;
      });
    } else {
      current = doneTasks.find((task) => {
        return task.id === id;
      });
    }
  }
  
  const [editTask, setEditTask] = useState({
    id: id,
    title: current.title,
    desc: current.desc,
  });

  function handlePopUp(action) {
    if (action) {
      if (type === "tasks") {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            return {...task, title: editTask.title, desc: editTask.desc};
          }
          return task;
        });
        setTasks(newTasks);
      } else if (type === "doneTasks") {
        console.log(type);
        console.log(doneTasks);
        const newTasks = doneTasks.map((task) => {
          if (task.id === id) {
            return {...task, title: editTask.title, desc: editTask.desc};
          }
          return task;
        });
        setDoneTasks(newTasks);
      } else {
        let status = allTasks.filter((task) => {
          return task.id === id;
        });
        status = status[0].done;
        if (!status) {
          const newTasks = tasks.map((task) => {
            if (task.id === id) {
              return {...task, title: editTask.title, desc: editTask.desc};
            }
            return task;
          });
          setTasks(newTasks);
        } else {
          const newTasks = doneTasks.map((task) => {
            if (task.id === id) {
              return {...task, title: editTask.title, desc: editTask.desc};
            }
            return task;
          });
          setDoneTasks(newTasks);
        }
      }
    }
    setShowEdit(false);
  }

  return (
    <>
      <div className="overlay">
        <div className="overlay__container">
          <h3 className="overlay__title">تعديل المهمة</h3>
          <div className="overlay__input">
            <label>
              <p>العنوان</p>
              <input
                type="text"
                value={editTask.title}
                onChange={(e) =>
                  setEditTask((prev) => {
                    return {...prev, title: e.target.value};
                  })
                }
              />
            </label>
            <label>
              <p>التفاصيل</p>
              <input
                type="text"
                value={editTask.desc}
                onChange={(e) =>
                  setEditTask((prev) => {
                    return {...prev, desc: e.target.value};
                  })
                }
              />
            </label>
          </div>
          <div className="overlay__actions">
            <Button
              variant="text"
              style={{color: "red", fontSize: "1.1rem", fontWeight: "bold"}}
              onClick={() => handlePopUp(true)}
            >
              تعديل
            </Button>
            <Button
              variant="text"
              style={{color: "red", fontSize: "1.1rem", fontWeight: "bold"}}
              onClick={() => handlePopUp(false)}
            >
              إلغاء
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPopUp;
