import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400">
      <div className="px-[120px] py-[72px] flex justify-start items-start gap-32">
        <div>
          <h4 className="text-white text-[32px] font-Public-Sans-Bold font-bold">
            TWISS
          </h4>
          <small>Customer Supports:</small>
          <p className="text-white text-lg font-Public-Sans-Medium font-medium ">
            (629) 555-0129
          </p>
          <p className="my-3">
            4517 Washington Ave. Manchester, Kentucky 39495
          </p>
          <p className="text-white">info@kinbo.com</p>
        </div>

        <div>
          <h4 className="text-white font-Public-Sans-Bold font-bold uppercase mb-3">
            quick link
          </h4>
          <ul>
            <li className="mb-1.5">
              <Link>Shop Product</Link>
            </li>
            <li className="mb-1.5">
              <Link>Shoping Cart</Link>
            </li>
            <li className="mb-1.5">
              <Link>Wishlist</Link>
            </li>
            <li className="mb-1.5">
              <Link>Customer Help</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-[120px] py-6 text-gray-400 text-center border-t border-white border-opacity-20">
        <small>
          Kinbo - eCommerce Template © 2021. Design by Templatecookie
        </small>
      </div>
    </footer>
  );
}

export default Footer;
