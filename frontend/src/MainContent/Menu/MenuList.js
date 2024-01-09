import React from "react";
import MenuItem from "./MenuItem";
import "./MenuList.css";

//This component is used to map over the items we pass from the "Menu Component" which consist of an array of items
//When then call the "Menu Item" compopnent and pass in the individual items from the array's attributes/details
const MenuList = ({ items }) => {
  return (
    <div className="menu-list">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuList;
