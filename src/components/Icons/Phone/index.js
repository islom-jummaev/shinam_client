import React from 'react'
import PropTypes from 'prop-types'

const Instagram = ({ fill }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22.6667 16.6667C21.0067 16.6667 19.4 16.4 17.9067 15.9067C17.4467 15.76 16.92 15.8667 16.5534 16.2334L13.6201 19.1734C9.84006 17.2534 6.75337 14.1667 4.83337 10.3934L7.76669 7.44669C8.13337 7.08 8.24 6.55338 8.09338 6.09338C7.60006 4.60006 7.33337 2.99337 7.33337 1.33337C7.33331 0.593313 6.74 0 6 0H1.33331C0.6 0 0 0.593313 0 1.33331C0 13.8533 10.1467 24 22.6667 24C23.4067 24 24 23.4067 24 22.6667V18C24 17.26 23.4067 16.6667 22.6667 16.6667Z"
				fill={fill}
			/>
		</svg>
	)
}

Instagram.propTypes = {
	fill: PropTypes.string,
}

Instagram.defaultProps = {
	fill: 'black',
}

export default Instagram
