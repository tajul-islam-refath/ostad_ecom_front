import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserList } from "../api/API";

function AdminUserList() {
  const userList = useSelector((state) => state.app.userList);
  useEffect(() => {
    (async () => {
      await getUserList();
    })();
  }, []);
  return (
    <div className="my-4">
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
                Role
              </td>
            </tr>
          </thead>
          <tbody>
            {userList.map((item, i) => (
              <tr>
                <td>
                  <p className="text-xs text-start">{item.name}</p>
                </td>
                <td>
                  <p className="text-xs text-start">{item.email}</p>
                </td>
                <td>
                  <p className="text-xs text-start">{item.role}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUserList;
