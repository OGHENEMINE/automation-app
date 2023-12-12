import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import Input from "../components/Input";
import { ArrowRightIcon, ChevronRight, EyeIcon, Home } from "lucide-react";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";
import Google from "../assets/Google.png";
import AppleIcon from "../assets/Apple.svg";
import Breadcrumb from "../components/Breadcrumb";

function SignUp() {
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
        <span className="text-[#2DA5F3] font-Public-Sans-Medium">Sign Up</span>
      </Breadcrumb>

      {/* FORM STARTS HERE */}
      <AuthLayout>
        <form className="px-8 py-6">
          <Input
            className="py-3 px-3 border rounded-sm border-gray-200"
            id="name"
            type="text"
            placeholder="Enter your name"
            label="Name"
            labelDisplay={true}
          />
          <Input
            className="py-3 px-3 border rounded-sm border-gray-200"
            id="email"
            type="email"
            placeholder="Enter email address"
            label="Email Address"
            labelDisplay={true}
          />

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
            text="SIGN UP"
            className="my-6 flex items-center justify-center gap-2 text-sm px-4 rounded-sm w-full bg-orange-400 hover:shadow hover:bg-orange-500 text-white py-3 font-Public-Sans-Bold"
            icon={<ArrowRightIcon />}
          />

          <h6 className="text-sm text-slate-500 mb-3 relative after:absolute before:absolute after:top-1/2 after:-translate-y-1/2 after:-right-3 before:top-1/2 before:-translate-y-1/2 before:-left-3 after:inline-block before:inline-block after:h-[1px] before:h-[1px] after:bg-gray-200 before:bg-gray-200 text-center after:w-1/2 before:w-1/2 overflow-hidden">
            or
          </h6>

          <Link
            to="#"
            className="text-neutral-600 text-sm text-center rounded-sm border border-gray-200 py-3 px-4 w-full flex items-center gap-[85px] mb-3"
          >
            <img src={Google} alt="google icon" />
            Sign up with Google
          </Link>
          <Link
            to="#"
            className="text-neutral-600 text-sm text-center rounded-sm border border-gray-200 py-3 px-4 w-full flex items-center gap-[85px]"
          >
            <img src={AppleIcon} alt="google icon" />
            Sign up with Apple
          </Link>
        </form>
      </AuthLayout>
    </>
  );
}

export default SignUp;
