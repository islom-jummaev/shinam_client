import React from 'react'
import PropTypes from 'prop-types'

const Telegram = ({ fill }) => {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.565215 13.3594L7.93867 16.1114L10.7926 25.2898C10.9753 25.8776 11.6941 26.0949 12.1712 25.7048L16.2813 22.3542C16.7121 22.0032 17.3258 21.9857 17.776 22.3125L25.1891 27.6946C25.6995 28.0656 26.4226 27.7859 26.5506 27.1692L31.9811 1.04741C32.1209 0.373703 31.4589 -0.188324 30.8174 0.0597828L0.556575 11.7335C-0.190199 12.0215 -0.183693 13.0788 0.565215 13.3594ZM10.3327 14.6465L24.7432 5.77104C25.0022 5.612 25.2686 5.96219 25.0462 6.16848L13.1534 17.2234C12.7354 17.6126 12.4657 18.1333 12.3893 18.6985L11.9842 21.7008C11.9306 22.1016 11.3675 22.1414 11.2569 21.7535L9.69877 16.2788C9.52032 15.6544 9.78037 14.9874 10.3327 14.6465Z"
				fill={fill}
			/>
		</svg>
	)
}

Telegram.propTypes = {
	fill: PropTypes.string,
}

Telegram.defaultProps = {
	fill: 'black',
}

export default Telegram