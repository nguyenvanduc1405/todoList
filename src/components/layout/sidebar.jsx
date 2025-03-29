import { Checkbox, Button } from "antd";
import { useState } from "react";
import "./sidebar.css";
const TodoSidebar = ({ selectedTask }) => {
   return (
      <div className="sidebar">
         <input type="text" className="sidebar-title" />
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
               margin: "40px 0",
            }}
         >
            <label htmlFor="1">is important?</label>
            <Checkbox id="1" />
         </div>
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
            }}
         >
            <label htmlFor="2">is completed?</label>
            <Checkbox id="2" />
         </div>
         <div
            style={{
               display: "flex",
               gap: "10px",
               margin: "50px",
            }}
         >
            <Button>Default Button</Button>
            <Button type="primary">Primary Button</Button>
         </div>
      </div>
   );
};
export default TodoSidebar;
