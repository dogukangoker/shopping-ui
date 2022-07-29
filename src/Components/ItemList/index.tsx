import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import SingleItem from "../SingleItem";
import { ShoppingList } from "../../redux/slice/postSlice";
const ItemList = () => {
  const shoppingList = useSelector(ShoppingList);
  return (
    <div className="item-list">
      <SingleItem item={shoppingList} />
    </div>
  );
};

export default ItemList;
