import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart, updateCart } from "../redux/slice";
function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state) => state.app.cart);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const checkout = () => {
    let chart = {
      products: cart,
      totalPrice: totalPrice,
    };
    localStorage.setItem("cart", JSON.stringify(chart));
    navigation("/checkout");
  };

  useEffect(() => {
    let res = 0;
    cart.map((item) => {
      res += item.quantity * item.price;
    });
    setTotalPrice(res);
  }, [cart]);
  return (
    <div className="container my-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, i) => (
            <tr>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <div className="flex">
                  <button
                    className="btn btn-primary btn-sm mr-2"
                    onClick={() => {
                      dispatch(
                        updateCart({
                          index: i,
                          data: {
                            title: product.title,
                            price: product.price,
                            quantity: product.quantity + 1,
                          },
                        })
                      );
                    }}>
                    +
                  </button>
                  <input
                    type="text"
                    value={product.quantity}
                    style={{ width: "40px" }}
                    disabled
                  />
                  <button
                    className="btn btn-primary btn-sm ml-1"
                    onClick={() => {
                      dispatch(
                        updateCart({
                          index: i,
                          data: {
                            title: product.title,
                            price: product.price,
                            quantity: product.quantity - 1,
                          },
                        })
                      );
                    }}>
                    -
                  </button>
                </div>
              </td>
              <td>{product.price * product.quantity}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm "
                  onClick={() => dispatch(removeToCart(i))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td>Total Price</td>
            <td>{totalPrice}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Make Order</td>
            <td>
              {" "}
              <button
                className="btn btn-success btn-sm"
                onClick={() => checkout()}>
                Checkout
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
