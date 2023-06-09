import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App.jsx";
import Register from "./Register.jsx";
import Profile from "./Profile.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Protected from "./Protected.jsx";
import Login from "./Login.jsx";
import AdminProductList from "./admin/AdminProductList";
import Home from "./pages/Home.jsx";
import ProductList from "./pages/ProductList.jsx";
import AdminLayout from "./admin/AdminLayout.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import ProductCreateUpdate from "./admin/ProductCreateUpdate";
import AdminUserList from "./admin/AdminUserList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <Protected>
        <AdminLayout />
      </Protected>
    ),
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/products",
        element: <AdminProductList />,
      },
      {
        path: "/admin/productCreateUpdate",
        element: <ProductCreateUpdate />,
      },
      {
        path: "/admin/users",
        element: <AdminUserList />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
