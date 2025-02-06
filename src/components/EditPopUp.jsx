import Button from "@mui/material/Button";
import {useState} from "react";
import {useTasksProvider} from "../context/TasksProvider";
import "../styles/PopUp.css";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const EditPopUp = () => {
  const {currentTask, tasks, setTasks, doneTasks, setDoneTasks, setShowEdit, notify} =
    useTasksProvider();

  function editFunc(targetTask, setTargetTask) {
    const newTasks = targetTask.map((task) => {
      return task.id === currentTask.id ? editTask : task;
    });
    setTargetTask ? setTasks(newTasks) : setDoneTasks(newTasks);
  }

  const [editTask, setEditTask] = useState(currentTask);

  function handlePopUp(action) {
    if (action) {
      editTask.done ? editFunc(doneTasks, false) : editFunc(tasks, true);
      notify("تم التعديل بنجاح");
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
