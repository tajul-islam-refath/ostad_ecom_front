import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div class="d-flex flex-column flex-shrink-0 p-3 bg-light  h-100">
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"></a>

            <ul class="nav nav-pills flex-column mb-auto">
              <li>
                <a href="#" class="nav-link link-dark active">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-dark">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-dark">
                  Products
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-dark">
                  Customers
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-dark">
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
