import { useState } from "react";
import TaskItem from "./components/task.item";
import { PlusOutlined } from "@ant-design/icons";
import "./App.css";

function App() {
   const [task, setTask] = useState("");
   const [todoTaskList, setTodoTaskList] = useState([
      {
         id: crypto.randomUUID(),
         title: "Đi học thêm",
         isImportant: false,
         isCompleted: true,
      },
      {
         id: crypto.randomUUID(),
         title: "Đi học thêm 2",
         isImportant: true,
         isCompleted: false,
      },
   ]);
   const handleAddTask = (task) => {
      setTodoTaskList((prev) => [
         ...prev,
         {
            id: crypto.randomUUID(),
            title: task,
            isImportant: false,
            isCompleted: false,
         },
      ]);
      setTask("");
   };
   const handleToggleProperty = (id, property) => {
      setTodoTaskList((todoTaskItem) =>
         todoTaskItem.map((taskItem) =>
            taskItem.id === id
               ? { ...taskItem, [property]: !taskItem[property] }
               : taskItem
         )
      );
   };
   const handleToggleCompleted = (id) =>
      handleToggleProperty(id, "isCompleted");
   const handleToggleImportant = (id) =>
      handleToggleProperty(id, "isImportant");

   return (
      <div className="app-container">
         <div className="add-task-container">
            <PlusOutlined style={{ color: "#616161", opacity: "0.6" }} />
            <input
               type="text"
               value={task}
               className="add-task-input"
               placeholder="Add new task"
               onChange={(e) => setTask(e.target.value)}
               onKeyDown={(e) => {
                  if (e.key === "Enter") {
                     handleAddTask(e.target.value);
                  }
               }}
            />
         </div>
         <TaskItem
            todoTaskList={todoTaskList}
            onHandleToggleCompleted={handleToggleCompleted}
            onHandleToggleImportant={handleToggleImportant}
         />
      </div>
   );
}

export default App;
