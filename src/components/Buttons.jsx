import PropTypes from "prop-types";

function Buttons({ text, type, icon, className, ...rest }) {
  return (
    <button
      type={type}
      className={`outline-none ${className}`}
      {...rest}
    >
      {text && text}
      {icon}
    </button>
  );
}

Buttons.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element,
  className: PropTypes.string,
};


export default Buttons;
