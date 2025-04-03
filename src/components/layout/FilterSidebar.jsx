import { SearchOutlined } from "@ant-design/icons";
import "./FilterSidebar.css";

const FilterCount = ({ icon, title, todoTaskListCount }) => {
   return (
      <>
         <div className="filter-count">
            <img src={icon} alt={`${title} icon`} />
            <h3>{todoTaskListCount[title]}</h3>
         </div>
         <div className="filter-title">{title}</div>
      </>
   );
};

const FilterItem = ({
   icon,
   title,
   onclick,
   isSelected,
   todoTaskListCount,
}) => {
   console.log(todoTaskListCount);
   return (
      <div
         className={`filter-item ${isSelected ? "selected" : ""}`}
         onClick={onclick}
      >
         <FilterCount
            todoTaskListCount={todoTaskListCount}
            icon={icon}
            title={title}
         />
      </div>
   );
};

const FilterSidebar = ({
   filterItems,
   selectedItemId,
   setSelectedItemId,
   todoTaskList,
}) => {
   const todoTaskListCount = todoTaskList.reduce(
      (acc, crr) => {
         if (crr.isImportant) {
            acc["Important"]++;
         }
         if (crr.isCompleted) {
            acc["Completed"]++;
         }
         if (crr.isDelete) {
            acc["Delete"]++;
         }
         return acc;
      },
      {
         All: todoTaskList.length,
         Important: 0,
         Completed: 0,
         Delete: 0,
      }
   );

   const handleItemClick = (idItem) => {
      setSelectedItemId(idItem);
   };
   return (
      <div className="filter-sidebar">
         <div className="filter-search">
            <SearchOutlined />
            <input className="search" placeholder="Search task..." />
         </div>
         <div className="filter-list">
            {filterItems.map((item) => (
               <FilterItem
                  key={item.id}
                  icon={item.icon}
                  todoTaskListCount={todoTaskListCount}
                  title={item.title}
                  isSelected={item.id === selectedItemId}
                  onclick={() => handleItemClick(item.id)}
               />
            ))}
         </div>
      </div>
   );
};
export default FilterSidebar;
