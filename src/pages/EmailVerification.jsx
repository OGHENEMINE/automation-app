import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { ArrowRightIcon, ChevronRight, Home } from "lucide-react";
import Buttons from "../components/Buttons";
import Input from "../components/Input";

function EmailVerification() {
  return (
    <>
      <Breadcrumb>
        <Link
          className="flex items-center gap-2 hover:text-[#2DA5F3] focus:text-[#2DA5F3]"
          to="/"
        >
          <Home size={18} />
          Home
        </Link>
        <ChevronRight size={18} />
        <span>User Account</span>
        <ChevronRight size={18} />
        <Link
          className="hover:text-[#2DA5F3] focus:text-[#2DA5F3]"
          to="/sign-in"
        >
          Sign In
        </Link>
        <ChevronRight size={18} />
        <span className="text-[#2DA5F3] font-Public-Sans-Medium">
          Forget Password
        </span>
      </Breadcrumb>
      <div className="text-zinc-900 w-[424px] mx-auto shadow my-6">
        <form className="px-8 py-6">
          <div className="text-center mb-6 text-sm text-gray-500 font-Public-Sans-Regular">
            <h4 className="text-xl text-zinc-900 font-Public-Sans-Semibold mb-3">
              Verify Your Email Address
            </h4>
          </div>
          <div>
            <h6 className="flex items-center justify-between text-sm mb-2 mt-4">
              <span>Verification code</span>
              <Link to="/send-code" className="text-[#2DA5F3] font-Public-Sans-Medium">Resend Code</Link>
            </h6>
            <Input
              className="py-3 px-3 border rounded-sm border-gray-200"
              id="Verification Code"
              name="Verification Code"
              type="text"
              placeholder="Enter Verification Code"
              label="Verification Code"
              labelDisplay={false}
            />
          </div>

          <Buttons
            text="VERIFY ME"
            className="my-6 flex items-center justify-center gap-2 text-sm px-4 rounded-sm w-full bg-orange-400 hover:shadow hover:bg-orange-500 text-white py-3 font-Public-Sans-Bold"
            icon={<ArrowRightIcon />}
          />
        </form>
      </div>
    </>
  );
}

export default EmailVerification;
