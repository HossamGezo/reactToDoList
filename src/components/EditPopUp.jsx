import Button from "@mui/material/Button";
import {useState} from "react";
import {TasksProvider} from "../App";
import "../styles/PopUp.css";

// ---------------------------------------------

const EditPopUp = () => {
  const {id, tasks, setTasks, doneTasks, allTasks, setDoneTasks, setShowEdit} =
    TasksProvider();

  let current;

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

  const [editTask, setEditTask] = useState({
    id: id,
    title: current.title,
    desc: current.desc,
    done: current.done,
  });

  function handlePopUp(action) {
    if (action) {
      let status = allTasks.filter((task) => {
        return task.id === id;
      });
      status = status[0].done;
      if (!status) {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            return editTask;
          }
          return task;
        });
        setTasks(newTasks);
      } else {
        const newTasks = doneTasks.map((task) => {
          if (task.id === id) {
            return editTask;
          }
          return task;
        });
        setDoneTasks(newTasks);
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
            <Button variant="text" onClick={() => handlePopUp(true)}>
              تعديل
            </Button>
            <Button variant="text" onClick={() => handlePopUp(false)}>
              إلغاء
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPopUp;
