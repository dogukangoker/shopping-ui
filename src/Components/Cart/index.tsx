import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import { CartList } from "../../redux/slice/postSlice";
const Cart = () => {
  const cartList = useSelector(CartList);
  useEffect(() => {
    console.log(cartList);
  }, [cartList]);
  return (
    <div>
      {cartList.map((cart) => (
        <div>
          {cart.name} <span>{cart.quantity}</span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
