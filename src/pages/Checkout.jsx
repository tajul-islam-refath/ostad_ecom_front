import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slice";
import { createNewOrder } from "../api/API";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async () => {
    let cartItem = JSON.parse(localStorage.getItem("cart"));
    let data = {
      ...cartItem,
      name,
      email,
      address,
    };
    if (await createNewOrder(data)) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
      navigate("/products");
    }
  };

  return (
    <div className="container-fluid">
      <div className="col-md-6 offset-3 mt-4">
        <div className="card p-2">
          <div class="form-group my-1">
            <label for="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div class="form-group my-1">
            <label for="email">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div class="form-group my-1">
            <label for="address">Address</label>
            <textarea
              name="address"
              className="form-control"
              id="address"
              cols="30"
              rows="10"
              onChange={(event) => setAddress(event.target.value)}></textarea>
          </div>
          <button className="btn btn-success btn-sm" onClick={() => onSubmit()}>
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
