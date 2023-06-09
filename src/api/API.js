import { store } from "../redux/store";
import { login, productListAction, userListAction } from "../redux/slice";
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
export const createNewProduct = async (formData) => {
  try {
    let { data } = await axiosInstance.post("/products/new", formData);

    if (data.success) {
      toast.success("Create a new product success");
      return true;
    } else {
      toast.error("Product create fail");
      return false;
    }
  } catch (e) {
    console.log("err", e.message);
    toast.error("Product create fail");
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
