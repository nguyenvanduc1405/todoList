import { SearchOutlined } from "@ant-design/icons";
import "./FilterSidebar.css";

const FilterCount = ({ icon, title, count }) => {
   return (
      <>
         <div className="filter-count">
            <img src={icon} alt={`${title} icon`} />
            <h3>{count}</h3>
         </div>
         <div className="filter-title">{title}</div>
      </>
   );
};

const FilterItem = ({ icon, title, count, onclick, isSelected }) => {
   return (
      <div
         className={`filter-item ${isSelected ? "selected" : ""}`}
         onClick={onclick}
      >
         <FilterCount icon={icon} title={title} count={count} />
      </div>
   );
};

const FilterSidebar = ({ filterItems, selectedItemId, setSelectedItemId }) => {
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
                  title={item.title}
                  count={item.count}
                  isSelected={item.id === selectedItemId}
                  onclick={() => handleItemClick(item.id)}
               />
            ))}
         </div>
      </div>
   );
};
export default FilterSidebar;
