import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import Buttons from "../components/Buttons";
import { ArrowRightIcon, EyeIcon } from "lucide-react";
import Input from "../components/Input";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <div className="text-zinc-900 w-[424px] mx-auto shadow mb-6">
      <form className="px-8 my-6 bg-black">
        <div className="text-center mb-6 text-sm text-gray-500 font-Public-Sans-Regular">
          <h4 className="text-xl text-zinc-900 font-Public-Sans-Semibold mb-3">Forget Password</h4>
          <h6>Enter the email address associated with your Twiss account.</h6>
        </div>
        <Input
          className="py-3 px-3 border rounded-sm border-gray-200"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          label="Email Address"
          labelDisplay={true}
        />

        <Buttons
          text="SEND CODE"
          className="my-6 flex items-center justify-center gap-2 text-sm px-4 rounded-sm w-full bg-orange-400 hover:shadow hover:bg-orange-500 text-white py-3 font-Public-Sans-Bold"
          icon={<ArrowRightIcon />}
        />

      <h6 className="text-sm font-Public-Sans-Medium">Already have account?<Link className="text-sky-400" to="/sign-in">Sign In</Link></h6>
      <h6 className="text-sm font-Public-Sans-Medium">Don&apost have account?<Link className="text-sky-400" to="/sign-up">Sign Up</Link></h6>
      </form>

    </div>
  );
}

export default ForgetPassword;
