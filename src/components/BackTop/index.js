import React from 'react'
import Styled from './styled-components'

const BackTop = ({ children, classNames, ...props }) => {
	return (
		<Styled.BackTopButton {...props} className={classNames}>
			{children}
		</Styled.BackTopButton>
	)
}

export default BackTop
