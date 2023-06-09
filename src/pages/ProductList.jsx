import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductList } from "../api/API";

function ProductList() {
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
              <h4>{item.title}</h4>
              <h5>Price: {item.price}</h5>
              <button className="btn btn-danger btn-sm">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
