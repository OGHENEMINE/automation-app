import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import PhoneCall from "../assets/PhoneCall.svg";
import MapPinLine from "../assets/MapPinLine.svg";
import Heart from "../assets/Heart.svg";
import Compare from "../assets/ArrowsCounterClockwise.svg";
import HeadPhone from "../assets/Headphones.svg";
import Help from "../assets/Info.svg";
import Search from "../assets/MagnifyingGlass.svg";
import User from "../assets/User.svg";
import Instagram from "../assets/Instagram.svg";
import Pinterest from "../assets/Pinterest.svg";
import Facebook from "../assets/Facebook.svg";
import Reddit from "../assets/Reddit.svg";
import Twitter from "../assets/Twitter.svg";
import Youtube from "../assets/Youtube.svg";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";
import Input from "./Input";
// import { PhoneCallIcon } from "lucide-react";
function Navbar() {
  return (
    <nav className="shadow text-white font-Public-Sans-Regular font-normal">
      {/* THE TOP NAV STARTS HERE */}
      <div className="bg-[#1B6392] border-b border-opacity-20 text-sm border-b-white flex items-center justify-between px-[120px] py-3">
        <p>Welcome to Twiss online eCommerce store.</p>

        {/* LEFT SIDE OF TOP NAV */}
        <div className="flex items-center">
          {/* FIRST PART OF THE LEFT SIDE */}
          <div className="flex items-center justify-center gap-2">
            <p>Follow us:</p>
            <div className="flex items-center justify-start gap-3">
              <Link to="/">
                <img src={Twitter} alt="Twitter icon" />
              </Link>
              <Link to="/">
                <img src={Facebook} alt="Facebook icon" />
              </Link>
              <Link to="/">
                <img src={Pinterest} alt="Pinterest icon" />
              </Link>
              <Link to="/">
                <img src={Reddit} alt="Reddit icon" />
              </Link>
              <Link to="/">
                <img src={Youtube} alt="Youtube icon" />
              </Link>
              <Link to="/">
                <img src={Instagram} alt="Instagram icon" />
              </Link>
            </div>
          </div>

          {/* SECOND PART OF THE LEFT SIDE */}
          {/* <div className="flex items-center gap-6 pl-6">
            <Buttons text="Eng"/>
            <Buttons text="USD"/>
          </div> */}
        </div>
      </div>

      {/* MIDDLE NAV STARTS HERE */}
      <div className="bg-[#1B6392] flex items-center justify-between px-[120px] py-5">
        <h1 className="text-[32px] uppercase font-Public-Sans-Bold font-bold">
          Twiss
        </h1>

        {/* CONTAINER FOR THE SEARCH FIELD STARTS HERE */}
        <div className="w-1/2 bg-white flex shadow items-center justify-center px-5 py-3.5 rounded-sm ">
          <Input
            type="text"
            label="search"
            placeholder="Search for anything..."
            id="search-input"
          />
          <Buttons type="icon-button" icon={<img alt="" src={Search} />} />
        </div>
        <div className="flex items-center justify-center gap-6">
          <FontAwesomeIcon icon={faShoppingCart} className="w-7 h-7" />
          <img alt="" src={Heart} />
          <Link to="/sign-up">
            <img src={User} alt="a user icon" />
          </Link>
        </div>
      </div>

      {/* BOTTOM NAV STARTS HERE */}
      <div className="text-zinc-900 text-sm flex items-center justify-between px-[120px] py-4">
        {/* BOTTOM NAV LEFT SIDE */}
        <div className="flex items-center gap-6">
          <ul className="inline-flex items-center gap-6 ">
            <Link className="inline-flex items-center justify-center gap-1.5 hover:text-orange-500">
              {" "}
              <img alt="" src={MapPinLine} />
              Track Order
            </Link>
            <Link className="inline-flex items-center justify-center gap-1.5 hover:text-orange-500">
              <img alt="" src={Compare} />
              Compare
            </Link>
            <Link className="inline-flex items-center justify-center gap-1.5 hover:text-orange-500">
              <img alt="" src={HeadPhone} />
              Customer Support
            </Link>
            <Link className="inline-flex items-center justify-center gap-1.5 hover:text-orange-500">
              <img alt="" src={Help} />
              Need Help
            </Link>
          </ul>
        </div>

        {/* BOTTOM NAV RIGHT SIDE */}
        <p className="text-lg flex items-center justify-center gap-1.5">
          <img alt="" src={PhoneCall} /> +1-202-555-0104
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
