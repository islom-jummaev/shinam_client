import React from 'react'
import PropTypes from 'prop-types'

const Facebook = ({ fill }) => {
	return (
		<svg
			width="32"
			height="32"
			fill="none"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M27.3125 0H4.6875C2.10303 0 0 2.10303 0 4.6875V27.3125C0 29.897 2.10303 32 4.6875 32H14.125V20.6875H10.375V15.0625H14.125V11.25C14.125 8.14819 16.6482 5.625 19.75 5.625H25.4375V11.25H19.75V15.0625H25.4375L24.5 20.6875H19.75V32H27.3125C29.897 32 32 29.897 32 27.3125V4.6875C32 2.10303 29.897 0 27.3125 0Z"
				fill={fill}
			/>
		</svg>
	)
}

Facebook.propTypes = {
	fill: PropTypes.string,
}

Facebook.defaultProps = {
	fill: 'black',
}

export default Facebook
