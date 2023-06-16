import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../api/API";
import { addToCart } from "../redux/slice";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.app.productList);
  useEffect(() => {
    (async () => {
      await getProductList();
    })();
  }, []);
  return (
    <div className="container my-4">
      <div className="row">
        {products.map((item, i) => (
          <div className="col-md-4 h-75">
            <div className="card p-2">
              <img className="w-100 h-25" src={`${item.image}`} alt="" />
              <h4>
                <Link to={`/products/${item._id}`}>{item.title}</Link>
              </h4>
              <h5>Price: {item.price}</h5>
              <button
                className="btn btn-danger btn-sm"
                onClick={() =>
                  dispatch(
                    addToCart({
                      title: item.title,
                      price: item.price,
                      quantity: 1,
                    })
                  )
                }>
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
