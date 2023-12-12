import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { Products } from "../util/Products";
import Buttons from "../components/Buttons";
import {
  ChevronRight,
  Home,
  HomeIcon,
  Minus,
  Plus,
  ShoppingCartIcon,
} from "lucide-react";

function ProductsPreview() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ProductId = searchParams.get("id");

  const Product = Products[ProductId - 1];
  return (
    <>
      <Breadcrumb>
        <Link className="flex items-center gap-2 hover:text-[#2DA5F3] focus:text-[#2DA5F3]" to="/">
          <Home size={18} />
          Home
        </Link>
        <ChevronRight size={18} />
        <span>Product </span>
        <ChevronRight size={18} />
        <span className="font-Public-Sans-Semibold">{Product.id}</span>
      </Breadcrumb>

      {/* PRODUCTS DETAIL STARTS HERE */}
      <div className="px-[120px]">
        <div className="flex items-center gap-14 mt-8 mb-[72px]">
          <img
            src={Product.img}
            className="w-[616px] h-[464px] rounded border border-gray-200"
          />
          <div className="flex flex-col gap-6">
            <h4 className="text-xl">
              2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB
              SSD Storage) - Space Gray
            </h4>
            <div className="grid grid-cols-2 text-sm">
              <h6>
                ID: <span className="font-Public-Sans-Bold">{Product.id}</span>
              </h6>
              <h6>
                Availability:{" "}
                <span className="font-Public-Sans-Bold">
                  {Product.availability}
                </span>
              </h6>
            </div>
            <h6 className="text-sky-400 text-2xl font-Public-Sans-Semibold">
              {Product.price}
            </h6>
            <div className="items-start justify-between flex">
              <div className="w-[164px] px-5 py-4 bg-white rounded-[3px] border-2 border-gray-200 justify-between items-center flex">
                <Buttons className="hover:shadow" icon={<Minus size={18} />} />
                <span>00</span>
                <Buttons className="hover:shadow" icon={<Plus size={18} />} />
              </div>
              <Buttons
                className="px-8 py-4 bg-orange-400 rounded-[3px] flex justify-center items-center gap-3 text-white font-Public-Sans-Bold"
                text="ADD TO CART"
                icon={<ShoppingCartIcon />}
              />
            </div>
            <div>
              <h6 className="font-Public-Sans-Semibold">Description</h6>
              <p className="text-sm">
                The most powerful MacBook Pro ever is here. With the
                blazing-fast M1 Pro or M1 Max chip — the first Apple silicon
                designed for pros — you get groundbreaking performance and
                amazing battery life. Add to that a stunning Liquid Retina XDR
                display, the best camera and audio ever in a Mac notebook, and
                all the ports you need. The first notebook of its kind, this
                MacBook Pro is a beast. M1 Pro takes the exceptional performance
                of the M1 architecture to a whole new level for pro users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPreview;
