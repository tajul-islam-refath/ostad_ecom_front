import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "./redux/slice";
import "./App.css";

function App() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.app.isAuthenticated);
  const user = useSelector((state) => state.app.user);
  const cart = useSelector((state) => state.app.cart);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logoutAction());
    navigation("/");
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link class="navbar-brand" to="/">
            Ecom
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/cart">
                  Cart
                  <span
                    class="badge badge-warning"
                    style={{ backgroundColor: "red" }}>
                    {cart.length}
                  </span>
                </Link>
              </li>

              {isAuthenticated ? (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/orders">
                      Orders
                    </Link>
                  </li>
                  {user.role == "admin" && (
                    <li class="nav-item">
                      <Link class="nav-link" to="/admin">
                        Admin
                      </Link>
                    </li>
                  )}
                  <li class="nav-item" onClick={() => logOut()}>
                    <a class="nav-link">Logout</a>
                  </li>
                </>
              ) : (
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
