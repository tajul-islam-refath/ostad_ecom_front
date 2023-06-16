import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../api/API";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/slice";

function SingleProduct() {
  let singleProduct = useSelector((state) => state.app.singleProduct);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    if (id !== null) {
      (async () => {
        await getSingleProduct(id);
      })();
    }
  }, []);

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 mt-2">
        <div className="card p-2">
          <img className="w-100 h-25" src={`${singleProduct?.image}`} alt="" />
          <h4>{singleProduct?.title}</h4>
          <h5>Price: {singleProduct?.price}</h5>
          <p>{singleProduct?.description}</p>
          <button
            className="btn btn-danger btn-sm"
            onClick={() =>
              dispatch(
                addToCart({
                  title: singleProduct.title,
                  price: singleProduct.price,
                  quantity: 1,
                })
              )
            }>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
