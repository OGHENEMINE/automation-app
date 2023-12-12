import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function AuthLayout({ children }) {

  return (
    <>

      <div className="text-zinc-900 w-[424px] mx-auto shadow my-[100px]">
        <div className="flex items-center transition-all duration-300  justify-center">
          <NavLink
            to="/sign-in"
            className={({ isActive }) =>
              `w-full py-4 font-Public-Sans-Semibold border-b-2  text-center transition-all duration-300 ${
                isActive ? "border-orange-400" : ""
              }`
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="/sign-up"
            className={({ isActive }) =>
              `w-full py-4 font-Public-Sans-Semibold border-b-2  text-center transition-all duration-300 ${
                isActive ? "border-orange-400" : ""
              }`
            }
          >
            Sign Up
          </NavLink>
        </div>
        {children}
      </div>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
