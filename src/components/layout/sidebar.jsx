import { Checkbox, Button } from "antd";
import { useState } from "react";
import "./sidebar.css";
const TodoSidebar = ({ taskItem, handleClickNewTask, setShowSideBar }) => {
   const [newTitle, setNewTitle] = useState(taskItem.title);
   const [newIsImportant, setNewIsImportant] = useState(taskItem.isImportant);
   const [newIsCompleted, setNewIsCompleted] = useState(taskItem.isCompleted);
   const handleSaveTask = () => {
      const newTodo = {
         ...taskItem,
         title: newTitle,
         isImportant: newIsImportant,
         isCompleted: newIsCompleted,
      };
      handleClickNewTask(newTodo);
      setShowSideBar(false);
   };
   return (
      <div className="sidebar">
         <input
            type="text"
            className="sidebar-title"
            value={newTitle}
            onChange={(e) => {
               setNewTitle(e.target.value);
            }}
         />
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
               margin: "40px 0",
            }}
         >
            <label htmlFor="1">is important?</label>
            <Checkbox
               id="1"
               checked={newIsImportant}
               onChange={() => setNewIsImportant(!newIsImportant)}
            />
         </div>
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
            }}
         >
            <label htmlFor="2">is completed?</label>
            <Checkbox
               id="2"
               checked={newIsCompleted}
               onChange={() => setNewIsCompleted(!newIsCompleted)}
            />
         </div>
         <div
            style={{
               display: "flex",
               gap: "10px",
               margin: "50px",
               justifyContent: "center",
            }}
         >
            <Button onClick={() => setShowSideBar(false)}>CanCel</Button>
            <Button
               type="primary"
               onClick={() => {
                  handleSaveTask();
               }}
            >
               Save
            </Button>
         </div>
      </div>
   );
};
export default TodoSidebar;
