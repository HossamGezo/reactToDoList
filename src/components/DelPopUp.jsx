import "../styles/PopUp.css";
import Button from "@mui/material/Button";
import "../styles/PopUp.css";
import {TasksProvider} from "../App";

// ----------------------------------------------------

const DelPopUp = ({type}) => {
  const {
    id,
    setShowDel,
    tasks,
    setTasks,
    doneTasks,
    setDoneTasks,
    allTasks,
  } = TasksProvider();

  function handlePopUp(action) {
    if (action) {
      if (type === "tasks") {
        const newTasks = tasks.filter((task) => {
          return task.id !== id;
        });
        setTasks(newTasks);
      } else if (type === "doneTasks") {
        const newTasks = doneTasks.filter((task) => {
          return task.id !== id;
        });
        setDoneTasks(newTasks);
      } else {
        let status = allTasks.filter((task) => {
          return task.id === id;
        });
        status = status[0].done;
        if (!status) {
          const newTasks = tasks.filter((task) => {
            return task.id !== id;
          });
          setTasks(newTasks);
        } else {
          const newTasks = doneTasks.filter((task) => {
            return task.id !== id;
          });
          setDoneTasks(newTasks);
        }
      }
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
            <Button
              variant="text"
              style={{color: "red", fontSize: "1.1rem", fontWeight: "bold"}}
              onClick={() => handlePopUp(true)}
            >
              نعم ، قم بالحذف
            </Button>
            <Button
              variant="text"
              style={{color: "red", fontSize: "1.1rem", fontWeight: "bold"}}
              onClick={() => handlePopUp(false)}
            >
              إغلاق
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DelPopUp;
