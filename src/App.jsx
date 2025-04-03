import { useState } from "react";
import TaskItem from "./components/task.item";
import { PlusOutlined } from "@ant-design/icons";
import "./App.css";
import TodoSidebar from "./components/layout/sidebar";
import FilterSidebar from "./components/layout/FilterSidebar";
import inboxIcon from "./assets/inbox.png";
import flagIcon from "./assets/flag.png";
import deleteIcon from "./assets/delete.png";
import checkIcon from "./assets/check.png";
function App() {
   const simpleHash = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
         hash = (hash << 5) - hash + str.charCodeAt(i);
         hash = hash & hash;
      }
      return "task-" + Math.abs(hash).toString(36);
   };
   const [todoTaskList, setTodoTaskList] = useState([
      {
         id: crypto.randomUUID(),
         title: "Đi học thêm",
         isImportant: false,
         isCompleted: true,
         isDelete: true,
      },
      {
         id: crypto.randomUUID(),
         title: "Đi học thêm 2",
         isImportant: true,
         isCompleted: false,
         isDelete: false,
      },
   ]);
   const [task, setTask] = useState("");
   const filterItems = [
      {
         id: simpleHash("All"),
         icon: inboxIcon,
         title: "All",
      },
      {
         id: simpleHash("Important"),
         icon: flagIcon,
         title: "Important",
      },
      {
         id: simpleHash("Completed"),
         icon: checkIcon,
         title: "Completed",
      },
      {
         id: simpleHash("Delete"),
         icon: deleteIcon,
         title: "Delete",
      },
   ];

   const [selectedItemId, setSelectedItemId] = useState(filterItems[0].id);
   const [selectedTaskId, setSelectedTaskId] = useState();
   const taskItem = todoTaskList.find(
      (todoTaskItem) => todoTaskItem.id === selectedTaskId
   );
   const [showSidebar, setShowSideBar] = useState(false);
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
   const handleDataTitle = (id) => {
      setShowSideBar(true);
      setSelectedTaskId(id);
   };

   const handleClickNewTask = (todo) => {
      setTodoTaskList((taskList) =>
         taskList.map((taskItem) =>
            taskItem.id === todo.id
               ? {
                    ...taskItem,
                    title: todo.title,
                    isCompleted: todo.isCompleted,
                    isImportant: todo.isImportant,
                 }
               : taskItem
         )
      );
   };
   return (
      <div className="container">
         <FilterSidebar
            filterItems={filterItems}
            todoTaskList={todoTaskList}
            selectedItemId={selectedItemId}
            setSelectedItemId={setSelectedItemId}
         />
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
               todoTaskList={todoTaskList.filter((todo) => {
                  switch (selectedItemId) {
                     case simpleHash("All"):
                        return true;
                     case simpleHash("Important"):
                        return todo.isImportant;
                     case simpleHash("Completed"):
                        return todo.isCompleted;
                     case simpleHash("Delete"):
                        return todo.isDelete;
                     default:
                        return true;
                  }
               })}
               onHandleToggleCompleted={handleToggleCompleted}
               onHandleToggleImportant={handleToggleImportant}
               onSelectTask={handleDataTitle}
            />
            {showSidebar && (
               <TodoSidebar
                  taskItem={taskItem}
                  setShowSideBar={setShowSideBar}
                  handleClickNewTask={handleClickNewTask}
               />
            )}
         </div>
      </div>
   );
}

export default App;
