import {TasksProvider} from "../App";
import OrderTab from "./OrderTab";

const Tasks = ({order}) => {
  const {tasks, doneTasks, allTasks} = TasksProvider();

  const orderTypes = {
    1: tasks,
    2: doneTasks,
    3: allTasks,
  };

  return <OrderTab order={orderTypes[order]} />;
};

export default Tasks;
