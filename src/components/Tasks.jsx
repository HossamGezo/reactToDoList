import {TasksProvider} from "../App";
import OrderTab from "./OrderTab";

const Tasks = ({order}) => {
  const {tasks, doneTasks, allTasks} = TasksProvider();

  const orderTypes = {
    tasks,
    allTasks,
    doneTasks,
  };

  return <OrderTab order={orderTypes[order]} />;
};

export default Tasks;
