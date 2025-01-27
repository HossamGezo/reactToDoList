import Task from "./task";
import {TasksProvider} from "../App";
import DelPopUp from "./DelPopUp";
import EditPopUp from "./EditPopUp";

const Tasks = ({order}) => {
  const {showEdit, showDel, tasks, doneTasks, allTasks} = TasksProvider();

  if (order === "tasks") {
    return (
      <>
        <div className="tasks">
          {tasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </div>
        {showDel && <DelPopUp type="tasks" />}
        {showEdit && <EditPopUp type="tasks" />}
      </>
    );
  } else if (order === "allTasks") {
    return (
      <>
        <div className="tasks">
          {allTasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </div>
        {showDel && <DelPopUp type="allTasks" />}
        {showEdit && <EditPopUp type="allTasks" />}
      </>
    );
  } else {
    return (
      <>
        <div className="tasks">
          {doneTasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </div>
        {showDel && <DelPopUp type="doneTasks" />}
        {showEdit && <EditPopUp type="doneTasks" />}
      </>
    );
  }
};

export default Tasks;
