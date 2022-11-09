import React from "react";

export const Item = ({ item }) => {
  console.log(item);
  return (
    <div>
      <img src={item.image_link} />
      <strong>{item.name}</strong>
      <div>${item.price}</div>
    </div>
  );
};
