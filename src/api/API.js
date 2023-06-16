import { store } from "../redux/store";
import {
  login,
  productListAction,
  userListAction,
  getOrderList,
  singleProduct,
} from "../redux/slice";
import axiosInstance from "../axiosInterceptors";
import { toast } from "react-toastify";

export const userRegister = async (formData) => {
  try {
    let { data } = await axiosInstance.post("/user/registration", formData);

    if (data.success) {
      toast.success("User registation success");
      return true;
    } else {
      toast.error("User registation fail!");
      return false;
    }
  } catch (e) {
    console.log("err", e.message);
    toast.error("User registation fail!");
    return false;
  }
};

export const userLogin = async (formData) => {
  try {
    let { data } = await axiosInstance.post("/user/login", formData);

    if (data.success) {
      toast.success("User login success");
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.user));
      store.dispatch(login(data));
      return true;
    } else {
      toast.error("User login fail!");
      return false;
    }
  } catch (e) {
    console.log("err", e.message);
    toast.error("User login fail!");
    return false;
  }
};

export const getUserList = async () => {
  try {
    let { data } = await axiosInstance.get("/users");

    if (data.success) {
      store.dispatch(userListAction(data));
      return true;
    } else {
      toast.error("User List get fail");
      return false;
    }
  } catch (e) {
    console.log("err", e.message);
    toast.error("User List get fail");
    return false;
  }
};

// product
export const createNewProduct = async (formData, objectId) => {
  try {
    let res;
    if (objectId == 0) {
      res = await axiosInstance.post("/products/new", formData);
    } else {
      res = await axiosInstance.put(`/products/${objectId}`, formData);
    }

    let data = res.data;

    if (data.success) {
      toast.success(data.message);
      return true;
    } else {
      toast.error("Product  fail");
      return false;
    }
  } catch (e) {
    console.log("err", e.message);
    toast.error("Product fail");
    return false;
  }
};

export const getProductList = async () => {
  try {
    let { data } = await axiosInstance.get("/products");

    if (data.success) {
      store.dispatch(productListAction(data));
      return true;
    } else {
      toast.error("Product get fail");
      return false;
    }
  } catch (e) {
    console.log("err", e.message);
    toast.error("Product get fail");
    return false;
  }
};

export const getSingleProduct = async (id) => {
  try {
    let { data } = await axiosInstance.get(`/products/${id}`);

    if (data.success) {
      store.dispatch(singleProduct(data));
      return true;
    } else {
      toast.error("Product get fail");
      return false;
    }
  } catch (e) {
    console.log("err", e.message);
    toast.error("Product get fail");
    return false;
  }
};

// order
export const createNewOrder = async (formData) => {
  try {
    let { data } = await axiosInstance.post("/orders/new", formData);

    if (data.success) {
      toast.success("Order saved successfully");
      return true;
    } else {
      toast.error("Order saved fail");
      return false;
    }
  } catch (e) {
    console.log("err", e.message);
    toast.error("Order saved fail");
    return false;
  }
};

export const getMyOrderList = async () => {
  try {
    let { data } = await axiosInstance.get("/orders/me");

    if (data.success) {
      store.dispatch(getOrderList(data));
      return true;
    } else {
      toast.error("Orders get fail");
      return false;
    }
  } catch (e) {
    console.log("err", e.message);
    toast.error("Orders get fail");
    return false;
  }
};

export const getAdminOrderList = async () => {
  try {
    let { data } = await axiosInstance.get("/orders");

    if (data.success) {
      store.dispatch(getOrderList(data));
      return true;
    } else {
      toast.error("Orders get fail");
      return false;
    }
  } catch (e) {
    console.log("err", e.message);
    toast.error("Orders get fail");
    return false;
  }
};
