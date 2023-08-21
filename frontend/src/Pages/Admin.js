import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const token = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/admin", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data.Status === "Success") {
          setIsLoggedIn(true);
          console.log(res.data);
        }
      })
      .catch((err) => {
        navigate("/login");
        console.log(err);
      });
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!isLoggedIn) {
    return null; // Render nothing if user is not an admin
  }

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 fixed-top">
            <a
              href="/admin"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                Admin Dashboard
              </span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
                <Link
                  to=""
                  data-bs-toggle="collapse"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Houses</span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/cars"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Cars</span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/lands"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Lands</span>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <a href="/" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-power"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Admin Page</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;
