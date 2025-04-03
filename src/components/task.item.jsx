import { HeartFilled } from "@ant-design/icons";
import { Checkbox } from "antd";
const TaskItem = ({
   todoTaskList,
   onHandleToggleCompleted,
   onHandleToggleImportant,
   onSelectTask,
}) => {
   return (
      <ul className="task-list">
         {todoTaskList.map((item) => (
            <li
               key={item.id}
               className="task-content"
               onClick={() => onSelectTask(item.id)}
            >
               <div className="task-title">
                  <Checkbox
                     id={item.id}
                     checked={item.isCompleted}
                     onClick={(e) => {
                        e.stopPropagation();
                        onHandleToggleCompleted(item.id);
                     }}
                  />
                  <label
                     htmlFor={item.id}
                     style={
                        item.isCompleted
                           ? {
                                textDecoration: "line-through",
                             }
                           : {}
                     }
                  >
                     {item.title}
                  </label>
               </div>
               <div className="task-important">
                  <HeartFilled
                     style={item.isImportant ? { color: "#f00" } : {}}
                     onClick={(e) => {
                        e.stopPropagation();
                        onHandleToggleImportant(item.id);
                     }}
                  />
               </div>
            </li>
         ))}
      </ul>
   );
};
export default TaskItem;
