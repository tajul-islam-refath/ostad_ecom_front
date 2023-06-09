import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProductList } from "../api/API";

function AdminProductList() {
  const products = useSelector((state) => state.app.productList);
  useEffect(() => {
    (async () => {
      await getProductList();
    })();
  }, []);
  return (
    <div className="my-4">
      <button className="btn btn-danger my-2">
        <Link to="/admin/productCreateUpdate" className="text-light">
          New Product
        </Link>
      </button>
      <div className="table-responsive table-section">
        <table className="table ">
          <thead className="sticky-top bg-white">
            <tr>
              <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Image
              </td>
              <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Title
              </td>
              <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Description
              </td>
              <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Price
              </td>
              <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Quantity
              </td>
              <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <tr>
                <td>
                  <img src={`${item.image}`} alt="" />
                </td>
                <td>
                  <p className="text-xs text-start">{item.title}</p>
                </td>
                <td>
                  <p className="text-xs text-start">{item.description}</p>
                </td>
                <td>
                  <p className="text-xs text-start">{item.price}</p>
                </td>
                <td>
                  <p className="text-xs text-start">{item.quantity}</p>
                </td>
                <td className="flex">
                  <Link
                    to={`/admin/productCreateUpdate?id=${item._id}`}
                    className="btn text-info btn-outline-light btn-sm">
                    Edit
                  </Link>
                  <button className="btn btn-outline-light text-danger btn-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProductList;
