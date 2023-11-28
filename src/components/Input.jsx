import React from 'react'
import PropTypes from 'prop-types'


function Input({id, label, ...rest}) {
  return (
    <div className="w-full">
    <label htmlFor={id} className="sr-only">{label}</label>
      <input
        id={id}
        {...rest}
        className="outline-none bg-transparent text-slate-500 text-sm w-full inline-block"
      />
    </div>
  )
}

Input.propTypes = {
 id: PropTypes.string,
 label: PropTypes.string
}

export default Input
