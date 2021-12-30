import React, { useState } from 'react'
import { Element } from 'react-scroll'
import Styled from './styled-components'

import { data } from './data'
import { useTranslation } from 'react-i18next'

const About = () => {
	const [currentTabIndex, setCurrentTabIndex] = useState(0)
	const { i18n } = useTranslation()
	const trans = data[i18n.language]

	const handleTabChange = (index) => {
		setCurrentTabIndex(index)
	}

	const currentTab = trans[currentTabIndex]

	return (
		<Element name="about">
			<Styled.ContainerFluid>
				<Styled.AboutWrapper>
					<Styled.AboutButtons>
						{trans.map((item, index) => (
							<Styled.Button
								title={item.title}
								active={currentTabIndex === index}
								onClick={() => handleTabChange(index)}
								key={index.toString()}
							>
								<span>{item.name}</span>
							</Styled.Button>
						))}
					</Styled.AboutButtons>
					<Styled.AboutContent>
						<Styled.AboutTexts>
							<Styled.AboutTitle>
								{currentTab.title}
							</Styled.AboutTitle>
							<Styled.AboutAbout>
								{currentTab.body}
							</Styled.AboutAbout>
						</Styled.AboutTexts>
						<Styled.AboutImages>
							<Styled.AboutImg src={currentTab.image} />
						</Styled.AboutImages>
					</Styled.AboutContent>
				</Styled.AboutWrapper>
			</Styled.ContainerFluid>
		</Element>
	)
}

export default About
