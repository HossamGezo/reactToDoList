import Task from "./Task";
import DelPopUp from "./DelPopUp";
import EditPopUp from "./EditPopUp";
import {useTasksProvider} from "../context/TasksProvider";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const OrderTab = ({order}) => {
  const {showEdit, showDel} = useTasksProvider();
  return (
    <>
      <div className="tasks">
        {order.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>
      {showDel && <DelPopUp />}
      {showEdit && <EditPopUp />}
    </>
  );
};

export default OrderTab;
