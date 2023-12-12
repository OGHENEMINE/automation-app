import React, { useState } from "react";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
import { ArrowRightIcon, ChevronRight, EyeIcon, Home } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

function ResetPassword() {
  const [revealPassword, setRevealPassword] = useState(false);

  const handlePasswordReveal = (e) => {
    e.preventDefault();
    setRevealPassword(!revealPassword);
  };
  return (
    <>
      <Breadcrumb>
        <Link className="flex items-center gap-2 hover:text-[#2DA5F3] focus:text-[#2DA5F3]" to="/">
          <Home size={18} />
          Home
        </Link>
        <ChevronRight size={18} />
        <span>User Account</span>
        <ChevronRight size={18} />
        <Link className="hover:text-[#2DA5F3] focus:text-[#2DA5F3]" to="/sign-in">Sign In</Link>
        <ChevronRight size={18} />
        <Link className="hover:text-[#2DA5F3] focus:text-[#2DA5F3]" to="/forget-password">Forgot Password</Link>
        <ChevronRight size={18} />
        <span className="text-[#2DA5F3] font-Public-Sans-Medium">Reset Password</span>
      </Breadcrumb>

      {/* FORM STARTS HERE */}
      <div className="text-zinc-900 w-[424px] mx-auto shadow my-6">
        <form className="px-8 my-6">
          <h4 className="text-center text-xl font-Public-Sans-Semibold">
            Reset Password
          </h4>
          <h6 className="flex items-center justify-between text-sm mb-2 mt-4">
            Password
          </h6>

          <div className="py-3 px-3 border rounded-sm border-gray-200 flex items-center gap-2">
            <Input
              id="password"
              name="password"
              type={revealPassword ? "text" : "password"}
              placeholder="Enter password"
              label="Password"
              labelDisplay={false}
            />
            <Buttons onClick={handlePasswordReveal} icon={<EyeIcon />} />
          </div>
          <h6 className="flex items-center justify-between text-sm mb-2 mt-4">
            Confirm Password
          </h6>

          <div className="py-3 px-3 border rounded-sm border-gray-200 flex items-center gap-2">
            <Input
              id="confirm-password"
              name="confirm-password"
              type={revealPassword ? "text" : "password"}
              placeholder="Enter password"
              label="confirm Password"
              labelDisplay={false}
            />
            <Buttons onClick={handlePasswordReveal} icon={<EyeIcon />} />
          </div>

          <Buttons
            text="RESET PASSWORD"
            className="my-6 flex items-center justify-center gap-2 text-sm px-4 rounded-sm w-full bg-orange-400 hover:shadow hover:bg-orange-500 text-white py-3 font-Public-Sans-Bold"
            icon={<ArrowRightIcon />}
          />
        </form>
      </div>
    </>
  );
}

export default ResetPassword;
