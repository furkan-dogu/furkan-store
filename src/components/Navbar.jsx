import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/furkan-logo.png";
import { closeNavbar, logoutIcon, openNavbar } from "../helper/icons";
import { useState } from "react";
import { useAuthContext } from "../context/AuthProvider";

const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { logout } = useAuthContext();
  const location = useLocation()
  return (
    <nav className="bg-[#F2EAAA] md:text-sm">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a href="https://github.com/furkan-dogu" target="_blank" rel="noreferrer">
            <img src={logo} width={60} height={60} alt="Furkan" />
          </a>

          <div className="md:hidden">
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setShow(!show)}
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div
          className={`${
            show ? "flex flex-col pb-2" : "hidden"
          } flex-1 items-center md:flex md:flex-row`}
        >
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item) => (
              <li
                key={item.title}
                className="text-gray-700 font-medium  flex justify-center"
              >
                <NavLink
                  to={item.path}
                  className={`block hover:bg-orange-500 rounded-full py-2 px-4 hover:text-white ${
                    location.pathname === item.path ? "underline scale-125" : ""}
                  `}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <NavLink
              to="/"
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-gray-700 hover:bg-orange-500 hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
              onClick={logout}
            >
              Logout {logoutIcon}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
