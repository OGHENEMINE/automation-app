import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Buttons({text, type, icon}) {
  return (
    <button className={classNames("outline-none", {
    "flex items-center justify-center gap-2 bg-gray-100 hover:bg-orange-500 hover:text-white py-3.5 px-6 rounded-sm text-zinc-900 text-sm font-Public-Sans-Medium font-medium": type == "bottom nav",
    "hover:text-orange-500": type == "link-button"
    })}>{type === "icon-button"? "" : text}{icon}</button>
  )
}

Buttons.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.element
}

Buttons.defaultProps = {
  text: "Shop Now",
  icon: <FontAwesomeIcon icon={faArrowRight} />
}

export default Buttons
