import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../styles/Task.css";
import {TasksProvider} from "../App";

// ----------------------------------------------------

const Task = ({task}) => {
  const {
    setId,
    setShowEdit,
    setShowDel,
    tasks,
    setTasks,
    doneTasks,
    setDoneTasks,
  } = TasksProvider();

  const handleDelete = (id) => {
    setShowDel(true);
    setId(id);
  };

  const handleEdit = (id) => {
    setShowEdit(true);
    setId(id);
  };

  const handleDone = (id, e) => {
    if (
      e.target.tagName === "path" &&
      e.target.parentElement.classList.contains("unComplete")
    ) {
      let completeTask = tasks.filter((task) => {
        return task.id === id;
      });
      completeTask[0].done = true;
      setDoneTasks((prev) => [...prev, ...completeTask]);
      const newTasks = tasks.filter((task) => {
        return task.id !== id;
      });
      setTasks(newTasks);
    } else if (
      e.target.tagName === "path" &&
      e.target.parentElement.classList.contains("done")
    ) {
      let unCompleteTask = doneTasks.filter((task) => {
        return task.id === id;
      });
      unCompleteTask[0].done = false;
      setTasks((prev) => [...prev, ...unCompleteTask]);
      const newDoneTasks = doneTasks.filter((task) => {
        return task.id !== id;
      });
      setDoneTasks(newDoneTasks);
    }
  };

  return (
    <>
      <div className="task">
        <div className="task__container">
          <h3 className="task__title">{task.title}</h3>
          <p className="task__desc">{task.desc}</p>
        </div>
        <div className="icons">
          <DeleteOutlineIcon
            style={{
              color: "#9A163D",
            }}
            onClick={() => handleDelete(task.id)}
          />
          <EditRoundedIcon
            style={{
              color: "#6A9AC0",
            }}
            onClick={() => handleEdit(task.id)}
          />
          <CheckCircleRoundedIcon
            className={task.done ? "done" : "unComplete"}
            onClick={(e) => handleDone(task.id, e)}
          />
        </div>
      </div>
    </>
  );
};

export default Task;
