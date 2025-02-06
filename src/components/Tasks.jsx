import {memo} from "react";
import {useTasksProvider} from "../context/TasksProvider";
import OrderTab from "./OrderTab";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const Tasks = memo(({order}) => {
  const {tasks, doneTasks, allTasks} = useTasksProvider();

  const orderTypes = {
    1: tasks,
    2: doneTasks,
    3: allTasks,
  };

  return <OrderTab order={orderTypes[order]} />;
});

export default Tasks;
