import React from 'react'
import PropTypes from 'prop-types'


function Input({id, label, labelDisplay, className, ...rest}) {
  return (
    <div className="w-full text-sm">
    <label htmlFor={id} className={labelDisplay? "block mb-2" : "sr-only"}>{label}</label>
      <input
        id={id}
        {...rest}
        className={`outline-none bg-transparent text-slate-500 w-full inline-block ${className}`}
      />
    </div>
  )
}

Input.propTypes = {
 id: PropTypes.string,
 label: PropTypes.string,
 className: PropTypes.string,
 labelDisplay: PropTypes.bool,
}

export default Input
