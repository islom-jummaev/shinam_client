import React from 'react'
import Styled from './styled-components'
import { data } from './data'
import { useTranslation } from 'react-i18next'

const Header = () => {
	const { i18n } = useTranslation()
	const trans = data[i18n.language]

	return (
		<Styled.ImagesContainer>
			<Styled.Carousel>
				{trans.map((item, index) => (
					<Styled.Slide key={index.toString()}>
						<Styled.TextContainer>
							<div>
								<Styled.Title className="title">
									<Styled.WaveImgLeft
										src="./images/header/header-wave.svg"
										alt=""
										className="wave-left"
									/>
									{item.caption}
									<Styled.WaveImgRight
										src="./images/header/header-wave.svg"
										alt=""
										className="wave-right"
									/>
								</Styled.Title>
								<Styled.Subtitle className="subtitle">
									{item.title}
								</Styled.Subtitle>
							</div>
						</Styled.TextContainer>
						<Styled.Img src={item.image} alt={item.title} />
					</Styled.Slide>
				))}
			</Styled.Carousel>
		</Styled.ImagesContainer>
	)
}
export default Header
