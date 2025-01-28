import Task from "./task";
import DelPopUp from "./DelPopUp";
import EditPopUp from "./EditPopUp";
import {TasksProvider} from "../App";

const OrderTab = ({order}) => {
  const {showEdit, showDel} = TasksProvider();

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
