import CheckCIcon from "@mui/icons-material/CheckCircleRounded";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../styles/Task.css";
import {TasksProvider} from "../App";
import {ModeEditOutlineOutlined} from "@mui/icons-material";

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

  const handleDone = (id) => {
    if (!task.done) {
      let completeTask = tasks.filter((task) => {
        return task.id === id;
      });
      completeTask[0].done = true;
      setDoneTasks((prev) => [...prev, ...completeTask]);
      const newTasks = tasks.filter((task) => {
        return task.id !== id;
      });
      setTasks(newTasks);
    } else {
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
          <h3
            className="task__title"
            style={{textDecoration: task.done ? "line-through" : "none"}}
          >
            {task.title}
          </h3>
          <p
            className="task__desc"
            style={{textDecoration: task.done ? "line-through" : "none"}}
          >
            {task.desc}
          </p>
        </div>
        <div className="icons">
          <DeleteOutlineIcon
            style={{
              color: "#9A163D",
              border: "3px solid #9A163D",
            }}
            onClick={() => handleDelete(task.id)}
          />
          <ModeEditOutlineOutlined
            style={{
              color: "#1768aa",
              border: "3px solid #1768aa",
            }}
            onClick={() => handleEdit(task.id)}
          />
          <CheckCIcon
            className={task.done ? "done" : "unComplete"}
            onClick={() => handleDone(task.id)}
          />
        </div>
      </div>
    </>
  );
};

export default Task;
