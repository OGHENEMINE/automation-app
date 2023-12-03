import PropTypes from "prop-types";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

// Buttons.defaultProps = {
//   text: "Shop Now",
//   icon: <FontAwesomeIcon icon={faArrowRight} />
// }

export default Buttons;
