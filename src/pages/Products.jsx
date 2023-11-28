import React from "react";
import { Link, useParams } from "react-router-dom";

function Products() {
  const {id} = useParams();
  return (
    <main>
      {/* BREADCRUMB DIV */}
      <div className="font-Public-Sans-Bold font-bold mx-[120px]">
        <Link to="/" className="text-zinc-500 hover:text-orange-500 focus:text-orange-500">Home</Link>
        <span> / product / {id}</span>
      </div>
      Products
    </main>
  );
}

export default Products;
