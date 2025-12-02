import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, loading, logOut } = use(AuthContext);

  const links = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/profile">My Profile</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/upcoming-toys">New Arrivals</NavLink>{" "}
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("user logout successfully");
      })
      .catch((err) => toast.error(err.code));
  };

  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <h1 className="font-bold text-xl cursor-pointer bg-transparent hover:bg-base-300 border-0 btn">
          Toy Store
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <span className="loading loading-spinner loading-xl"></span>
        ) : (
          <>
            {user ? (
              <div className="flex items-center gap-4">
                {/* .......... */}
                <div className="dropdown dropdown-hover dropdown-center">
                  <div tabIndex={0} role="button" className="cursor-pointer">
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="w-8 rounded-full"
                    />
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm"
                  >
                    <li className="font-semibold"> {user?.email} </li>
                  </ul>
                </div>

                <button onClick={handleLogout} className="btn">
                  LogOut
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
