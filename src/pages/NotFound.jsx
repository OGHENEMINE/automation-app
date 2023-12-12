import React from "react";
import { ArrowLeftIcon, HomeIcon } from "lucide-react";
import NotFoundImg from "../assets/Oops! 404 Error with a broken robot-rafiki (1) 1.png";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
    const refresh = useNavigate();
  return (
    <div className="px-[120px] flex flex-col items-center text-sm justify-center text-center mt-2 mb-[124px] ">
      <img src={NotFoundImg} alt="a notfound image"/>
      <h4 className="text-4xl font-Public-Sans-Semibold mb-2">404, Page not founds</h4>
      <h6 className="w-[536px]">Something went wrong. It’s look that your requested could not be found. It’s look like the link is broken or the page is removed.</h6>
      <div className="flex items-center gap-4 mt-6 font-Public-Sans-Bold">
        <Link onClick={() => refresh(-1)} className="flex items-center gap-2 text-white bg-orange-400 px-6 py-3 text-sm font-Public-Sans-Bold"><ArrowLeftIcon size={16}/>GO BACK</Link>
        <Link to="/" className="flex items-center gap-2 text-orange-400 border border-orange-400 px-6 py-3"><HomeIcon size={16}/>GO TO HOME</Link>
      </div>
    </div>
  );
}

export default NotFound;
