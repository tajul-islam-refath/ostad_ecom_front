import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isAuthenticated: localStorage.getItem("token") ? true : false,
  loader: false,
  orderList: [],
  productList: [],
  singleProduct: null,
  userList: [],
  cart: [],
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    logoutAction: (state) => {
      (state.token = null),
        (state.user = null),
        (state.isAuthenticated = false);
    },
    productListAction: (state, action) => {
      state.productList = action.payload.data;
    },
    singleProduct: (state, action) => {
      state.singleProduct = action.payload.data;
    },
    userListAction: (state, action) => {
      state.userList = action.payload.data;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeToCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
    updateCart: (state, action) => {
      state.cart[action.payload.index] = action.payload.data;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    getOrderList: (state, action) => {
      state.orderList = action.payload.data;
    },
  },
});

export const {
  login,
  logoutAction,
  productListAction,
  userListAction,
  addToCart,
  removeToCart,
  updateCart,
  clearCart,
  getOrderList,
  singleProduct,
} = counterSlice.actions;

export default counterSlice.reducer;
