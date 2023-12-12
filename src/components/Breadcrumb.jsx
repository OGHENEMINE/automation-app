import React from "react";
import PropTypes from "prop-types";

function Breadcrumb({ children }) {


  return (
    <div className="px-[120px] bg-gray-100 py-6">
      <div className="flex items-center gap-2 text-sm text-gray-500">
      {children}
    </div>
    </div>
  );
}

Breadcrumb.propTypes = {
  children: PropTypes.array,
};

export default Breadcrumb;
