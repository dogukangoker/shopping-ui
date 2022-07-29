import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AppState {
  shopping: ShoppingList[];
  cart: Cart[];
}

interface Cart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface ShoppingList {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
}

const initialState: AppState = {
  shopping: [
    {
      id: 1,
      name: "Bread",
      img: "https://cdn.discordapp.com/attachments/870285809817903174/1002649816477749308/bread.png",
      price: 25,
      quantity: 1,
    },
    {
      id: 2,
      name: "Burger",
      img: "https://cdn.discordapp.com/attachments/870285809817903174/1002649818021236906/burger.png",
      price: 25,
      quantity: 1,
    },
    {
      id: 3,
      name: "Backpack",
      img: "https://cdn.discordapp.com/attachments/870285809817903174/1002649815827624116/backpack.png",
      price: 100,
      quantity: 1,
    },
    {
      id: 4,
      name: "Sack",
      img: "https://cdn.discordapp.com/attachments/870285809817903174/1002649816989437993/sack.png",
      price: 100,
      quantity: 1,
    },
    {
      id: 5,
      name: "Crate",
      img: "https://cdn.discordapp.com/attachments/870285809817903174/1002649817715056771/crate.png",
      price: 100,
      quantity: 1,
    },
  ],
  cart: [],
};

export const ShoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const cart = state.cart;
      if (cart.find((i) => i.id === item.id)) {
        cart.find((i) => i.id === item.id)!.quantity += 1;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const cart = state.cart;
      if (cart.find((i) => i.id === item.id)) {
        cart.find((i) => i.id === item.id)!.quantity -= 1;
        if (cart.find((i) => i.id === item.id)!.quantity === 0) {
          cart.splice(cart.indexOf(cart.find((i) => i.id === item.id)!), 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = ShoppingSlice.actions;

export const ShoppingList = (state: RootState) => state.shopping.shopping;
export const CartList = (state: RootState) => state.shopping.cart;

export default ShoppingSlice.reducer;
