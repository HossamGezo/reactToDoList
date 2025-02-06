import CheckCIcon from "@mui/icons-material/CheckCircleRounded";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "../styles/Task.css";
import {useTasksProvider} from "../context/TasksProvider";
import {ModeEditOutlineOutlined} from "@mui/icons-material";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const Task = ({task}) => {
  const {
    setCurrentTask,
    setShowEdit,
    setShowDel,
    tasks,
    setTasks,
    doneTasks,
    setDoneTasks,
    notify,
  } = useTasksProvider();

  const handleDelete = () => {
    setShowDel(true);
    setCurrentTask(task);
  };

  const handleEdit = () => {
    setShowEdit(true);
    setCurrentTask(task);
  };

  const handleDone = (id) => {
    if (!task.done) {
      task.done = true;
      setDoneTasks((prev) => [...prev, task]);
      const newTasks = tasks.filter((task) => {
        return task.id !== id;
      });
      setTasks(newTasks);
      notify("تمت الاضافه الي المهمات المكتمله");
    } else {
      task.done = false;
      setTasks((prev) => [...prev, task]);
      const newDoneTasks = doneTasks.filter((task) => {
        return task.id !== id;
      });
      setDoneTasks(newDoneTasks);
      notify("تمت الاضافه الي المهمات غير المكتمله");
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
