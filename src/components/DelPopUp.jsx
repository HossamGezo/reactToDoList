import "../styles/PopUp.css";
import Button from "@mui/material/Button";
import "../styles/PopUp.css";
import {useTasksProvider} from "../context/TasksProvider";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const DelPopUp = () => {
  const {currentTask, setShowDel, tasks, setTasks, doneTasks, setDoneTasks, notify} =
    useTasksProvider();

  function handlePopUp(action) {
    if (action) {
      if (!currentTask.done) {
        const newTasks = tasks.filter((task) => {
          return task.id !== currentTask.id;
        });
        setTasks(newTasks);
      } else {
        const newTasks = doneTasks.filter((task) => {
          return task.id !== currentTask.id;
        });
        setDoneTasks(newTasks);
      }
      notify("تم الحذف بنجاح");
    }
    setShowDel(false);
  }

  return (
    <>
      <div className="overlay">
        <div className="overlay__container">
          <div className="overlay__desc">
            <h3>هل أنت متأكد من رغبتك في حذف المهمة؟</h3>
            <p>لا يمكنك التراجع عن الحذف في حال اختيار زر : (حذف)</p>
          </div>
          <div className="overlay__actions">
            <Button variant="text" onClick={() => handlePopUp(true)}>
              نعم ، قم بالحذف
            </Button>
            <Button variant="text" onClick={() => handlePopUp(false)}>
              إغلاق
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DelPopUp;
