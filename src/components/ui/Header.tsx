import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const authContext = useContext(AuthContext);

  const handleSignOut = () => {
    authContext?.logOut().then(() => {
      toast.success("Successfully Logout");
    });
  };

  return (
    <header className=" bg-primary sticky top-0 z-10 h-16 bg-blue-500 text-white dark:bg-gray-900 dark:text-gray-100">
      <nav className="custom-width mx-auto flex h-full items-center justify-between">
        <Link className="flex items-center gap-1 text-xl font-semibold" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="18" cy="4" r="1" />
            <path d="M3 9l4.5 1l3 2.5" />
            <path d="M13 21v-8l3 -5.5" />
            <path d="M8 4.5l4 2l4 1l4 3.5l-2 3.5" />
          </svg>
          <span className="text-white">Ultimate Fit</span>
        </Link>
        <ul className="relative hidden items-center gap-5 font-semibold sm:flex">
          <li className="hover:text-blue-900">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? " text-blue-900 dark:text-violet-400" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-blue-900">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? " text-blue-900 dark:text-violet-400" : ""
              }
            >
              Services
            </NavLink>
          </li>
          <li className="hover:text-blue-900">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? " text-blue-900 dark:text-violet-400" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          {authContext?.user && authContext.user.uid ? (
            <>
              <li className="hover:text-blue-900">
                <NavLink
                  to="/add-service"
                  className={({ isActive }) =>
                    isActive ? " text-blue-900 dark:text-violet-400" : ""
                  }
                >
                  Add Service
                </NavLink>
              </li>
              <li className="hover:text-blue-900">
                <NavLink
                  to="/my-reviews"
                  className={({ isActive }) =>
                    isActive ? " text-blue-900 dark:text-violet-400" : ""
                  }
                >
                  My Reviews
                </NavLink>
              </li>
              <li>
                <img
                  alt="profile-picture"
                  className="h-10 w-10 rounded-full border border-gray-300 bg-gray-500"
                  src={
                    authContext.user.photoURL ||
                    "https://source.unsplash.com/40x40/?portrait?1"
                  }
                />
              </li>
              <li
                className="cursor-pointer hover:text-blue-900"
                onClick={handleSignOut}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-blue-900">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? " text-blue-900 dark:text-violet-400" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Hamburger Menu */}
        <div
          onClick={() => setMenu(!menu)}
          className="z-50 flex h-5 w-6 cursor-pointer flex-col items-end justify-between sm:hidden "
        >
          <span
            className={`h-[0.1rem] rounded-lg bg-black transition-transform duration-100  ease-in-out dark:bg-gray-100 ${
              menu ? "w-6 translate-y-1 rotate-45" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] rounded-lg bg-black dark:bg-gray-100  ${
              menu ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] rounded-lg bg-black transition-transform duration-100 ease-in-out dark:bg-gray-100 ${
              menu ? "w-6 -translate-y-3.5 -rotate-45" : "w-full"
            }`}
          />
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={`${
          menu ? "translate-x-48" : "translate-x-full"
        } no-scrollbar fixed top-0 right-0 bottom-0 z-40 w-full overflow-y-auto bg-blue-400 transition-transform duration-200 ease-in-out dark:bg-gray-900 dark:text-gray-100 md:hidden `}
      >
        <ul className="ml-10 mt-32 mb-10 flex flex-col gap-7 ">
          <li onClick={() => setMenu(false)}>
            <Link to="/home">Home</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/blog">Blog</Link>
          </li>
          {authContext?.user && authContext.user.uid ? (
            <>
              <li onClick={() => setMenu(false)}>
                <Link to="/add-service">Add Service</Link>
              </li>
              <li onClick={() => setMenu(false)}>
                <Link to="/my-reviews">My Reviews</Link>
              </li>
            </>
          ) : (
            <>
              <li onClick={() => setMenu(false)}>
                <Link to="/login">Login</Link>
              </li>
              <li onClick={() => setMenu(false)}>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
