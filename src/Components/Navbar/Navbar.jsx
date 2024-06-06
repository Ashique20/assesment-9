import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <div className="pt-10  pr-2 pl-2  ">
      <div className="navbar rounded-2xl bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/blog">Blog </NavLink>
            </li>
            <li>
              <NavLink to="/update">Update Profile </NavLink>
            </li>
            <li>
              <NavLink to="/map">Map</NavLink>
            </li>

            <li>
              {user ? (
                <Link onClick={handleLogOut}>Sign Out</Link>
              ) : (
                <Link to="/login">Log In</Link>
              )}
            </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/blog">Blog </NavLink>
            </li>
            <li>
              <NavLink to="/update">Update Profile </NavLink>
            </li>
            <li>
              <NavLink to="/map">Map</NavLink>
            </li>

            <li>
              {user ? (
                <Link onClick={handleLogOut}>Sign Out</Link>
              ) : (
                <Link to="/login">Log In</Link>
              )}
            </li>
           
          </ul>
        </div>
        <div className="navbar-end">
          <div   data-tip={user?.displayName} className="avatar tooltip ">
            <div className="w-14 rounded-full  ">
              {user ? (
                <img
                
                
                  src={user?.photoURL}
                />
              ) : (
                <img src="https://cdn4.iconfinder.com/data/icons/political-elections/50/46-512.png" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
