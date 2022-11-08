import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const authContext = useContext(AuthContext);

  return (
    <header className=" bg-primary sticky top-0 z-10 h-16 bg-violet-400 dark:bg-gray-900 dark:text-gray-100">
      <nav className="custom-width mx-auto flex h-full items-center justify-between">
        <Link className="flex items-center gap-1 text-xl font-semibold" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-bolt"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
          </svg>
          <span>RUSH HOUR</span>
        </Link>
        <ul className="relative hidden items-center gap-5 font-semibold sm:flex">
          <li className="hover:text-violet-600">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? " text-violet-600 dark:text-violet-400" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-violet-600">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? " text-violet-600 dark:text-violet-400" : ""
              }
            >
              Services
            </NavLink>
          </li>
          <li className="hover:text-violet-600">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? " text-violet-600 dark:text-violet-400" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          {authContext?.user ? (
            <>
              <li className="hover:text-violet-600">
                <NavLink
                  to="/add-service"
                  className={({ isActive }) =>
                    isActive ? " text-violet-600 dark:text-violet-400" : ""
                  }
                >
                  Add Service
                </NavLink>
              </li>
              <li className="hover:text-violet-600">
                <NavLink
                  to="/my-reviews"
                  className={({ isActive }) =>
                    isActive ? " text-violet-600 dark:text-violet-400" : ""
                  }
                >
                  My Reviews
                </NavLink>
              </li>
              <li>
                <img
                  alt="profile-picture"
                  className="w-10 h-10 border rounded-full bg-gray-500 border-gray-300"
                  src={
                    authContext.user.photoURL ||
                    "https://source.unsplash.com/40x40/?portrait?1"
                  }
                />
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-violet-600">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? " text-violet-600 dark:text-violet-400" : ""
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

      <nav
        className={`${
          menu ? "translate-x-48" : "translate-x-full"
        } no-scrollbar fixed top-0 right-0 bottom-0 z-40 w-full overflow-y-auto bg-violet-400 transition-transform duration-200 ease-in-out dark:bg-gray-900 dark:text-gray-100 md:hidden `}
      >
        <ul className="ml-10 mt-32 mb-10 flex flex-col gap-7 ">
          <li onClick={() => setMenu(false)}>
            <Link to="/home">Home</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/courses">Courses</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/faq">FAQ</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/blog">Blog</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
