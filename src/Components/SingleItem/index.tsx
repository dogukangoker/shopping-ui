import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  changeQuantity,
} from "../../redux/slice/postSlice";
import { CartList, ShoppingList } from "../../redux/slice/postSlice";

import Modal from "../../UI/Modal";
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
  const [showModal, setShowModal] = useState(false);
  const [temporaryCartList, setTemporaryCartList] = useState<ArrayProps[]>([]);
  const [temporaryQuantity, setTemporaryQuantity] = useState(1);
  return (
    <div className="container-single-item">
      {item.map((item: any) => (
        <div key={item.id} className="single-item">
          <div>{item.name}</div>
          <img src={item.img} alt="" />
          <div
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            {item.price} $
          </div>
          <div className="single-item__quantity">
            <button
              onClick={() => {
                dispatch(removeFromCart(item));
              }}
            >
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
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <div className="container-single-item__modal">
          <div>Seçili Ürünleri Sepete Eklemek İstiyor Musunuz?</div>
          <div className="container-single-item__modal__icons">
            <span
              onClick={() => setShowModal(false)}
              className="material-symbols-outlined"
            >
              cancel
            </span>
            <span className="material-symbols-outlined">check_circle</span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SingleItem;
