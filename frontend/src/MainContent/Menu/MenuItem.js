import React from "react";
import "./MenuList.css";

//This component creates the individual items itself, using the props passed down from the "MenuList" we are able to grab specific details/attributes of each item including the name, description and price of each item
const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default MenuItem;
