import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../type";

const fakeData = [
  {
    id: 1001,
    name: "گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت",
    brand: "",
    countInStock: 3,
    rating: 4.5,
    qty: 2,
    price: 41900000,
    color: "bg-blue-900",
    colorFa: "آبی",
    img: "https://dkstatics-public.digikala.com/digikala-products/15d774761e234a15c1c559ac540963baad9e229f_1631704695.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
  },
  {
    id: 1002,
    name: "گوشی موبایل اپل مدل iPhone 12 Pro Max A2412 دو سیم‌ کارت ظرفیت 256 گیگابایت",
    brand: "",
    countInStock: 8,
    rating: 4.5,
    qty: 5,
    color: "bg-green-500",
    colorFa: "سبز",
    price: 34900000,
    img: "https://dkstatics-public.digikala.com/digikala-products/be7a0e9bf7866759fa3cea7648b149f589a01040_1607433995.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
  },
  {
    id: 1003,
    name: "گوشی موبایل اپل مدل iPhone 11 Pro Max A2220 دو سیم‌ کارت ظرفیت 128 گیگابایت",
    brand: "",
    countInStock: 5,
    rating: 4.5,
    qty: 2,
    color: "bg-red-500",
    colorFa: "قرمز",
    price: 28900000,
    img: "https://dkstatics-public.digikala.com/digikala-products/113542211.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
  },
  {
    id: 1004,
    name: "آیفون گوشی موبایل اپل مدل iPhone 13 A2634 دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4",
    brand: "",
    countInStock: 1,
    rating: 4.5,
    qty: 1,
    color: "bg-pink-500",
    colorFa: "صورتی",
    price: 23900000,
    img: "https://dkstatics-public.digikala.com/digikala-products/9db64cde85334e3bf4a6571547d339c57867f11f_1634390689.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
  },
];

const initialState: { cartItems: ICartItem[] } = {
  cartItems: fakeData,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQty: (state, { payload }) => {
      const index = state.cartItems.findIndex(
        (item: ICartItem) => item.id === payload
      );
      state.cartItems[index].countInStock > state.cartItems[index].qty &&
        state.cartItems[index].qty++;
    },
    decreaseQty: (state, { payload }) => {
      const index = state.cartItems.findIndex(
        (item: ICartItem) => item.id === payload
      );
      state.cartItems[index].qty > 1 && state.cartItems[index].qty--;
    },
    clearBasket: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item: ICartItem) => item.id !== payload
      );
    },
  },
});

const { reducer, actions } = cartSlice;

export const { increaseQty, decreaseQty, clearBasket, removeItem } = actions;

export default reducer;
