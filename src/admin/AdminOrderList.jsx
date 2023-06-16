import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAdminOrderList } from "../api/API";

function AdminOrderList() {
  const orders = useSelector((state) => state.app.orderList);
  useEffect(() => {
    (async () => {
      await getAdminOrderList();
    })();
  }, []);
  return (
    <div className="container my-4">
      <div className="table-responsive table-section">
        <table className="table ">
          <thead className="sticky-top bg-white">
            <tr>
              <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Name
              </td>
              <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Email
              </td>
              <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Address
              </td>
              <td className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Total Price
              </td>
            </tr>
          </thead>
          <tbody>
            {orders?.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>
                  <p className="text-xs text-start">{item.email}</p>
                </td>
                <td>
                  <p className="text-xs text-start">{item.address}</p>
                </td>
                <td>
                  <p className="text-xs text-start">{item.totalPrice}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminOrderList;
