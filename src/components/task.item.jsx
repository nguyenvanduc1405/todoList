import { HeartFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
const TaskItem = ({
   todoTaskList,
   onHandleToggleCompleted,
   onHandleToggleImportant,
}) => {
   return (
      <ul className="task-list">
         {todoTaskList.map((item) => (
            <li key={item.id} className="task-content">
               <div className="task-title">
                  <input
                     type="checkbox"
                     name=""
                     id=""
                     checked={item.isCompleted}
                     onChange={() => onHandleToggleCompleted(item.id)}
                  />
                  <span
                     style={
                        item.isCompleted
                           ? {
                                textDecoration: "line-through",
                             }
                           : {}
                     }
                  >
                     {item.title}
                  </span>
               </div>
               <div className="task-important">
                  <HeartFilled
                     style={item.isImportant ? { color: "#f00" } : {}}
                     onClick={() => onHandleToggleImportant(item.id)}
                  />
               </div>
            </li>
         ))}
      </ul>
   );
};
export default TaskItem;
