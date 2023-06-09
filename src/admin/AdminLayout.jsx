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
                <Link to="/admin" class="nav-link link-dark">
                  Dashboard
                </Link>
              </li>
              <li>
                <a href="#" class="nav-link link-dark">
                  Orders
                </a>
              </li>
              <li>
                <Link to="/admin/products" class="nav-link link-dark">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/admin/users" class="nav-link link-dark">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/" class="nav-link link-dark">
                  Home
                </Link>
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
