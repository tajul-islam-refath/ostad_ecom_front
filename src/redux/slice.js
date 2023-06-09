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
  userList: [],

  singleProduct: [],
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
    userListAction: (state, action) => {
      state.userList = action.payload.data;
    },
  },
});

export const { login, logoutAction, productListAction, userListAction } =
  counterSlice.actions;

export default counterSlice.reducer;
