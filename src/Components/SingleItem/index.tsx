import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slice/postSlice";
import { CartList, ShoppingList } from "../../redux/slice/postSlice";
import "./style.scss";

interface IProps {
  item: ArrayProps[];
}

interface ArrayProps {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

const SingleItem = ({ item }: IProps) => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(ShoppingList);
  const cartList = useSelector(CartList);
  return (
    <div className="container-single-item">
      {item.map((item: any) => (
        <div key={item.id} className="single-item">
          <div>{item.name}</div>
          <img src={item.img} alt="" />
          <div>{item.price} $</div>
          <div className="single-item__quantity">
            <button>
              <span>-</span>
            </button>
            {item.quantity}
            <button
              onClick={() => {
                dispatch(addToCart(item));
              }}
            >
              <span>+</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleItem;
