import React from 'react'
import Styled from './styled-component.js'

const GalleryCarousel = () => {
	const settings = {
		centerMode: true,
		infinite: true,
		slidesToShow: 3,
		centerPadding: '0',
		speed: 800,
		autoplay: true,
		focusOnSelect: true,
		pauseOnHover: true,
		arrows: false, 
		responsive: [
			{
				breakpoint: 756,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					focusOnSelect: false,
					pauseOnHover: false,
				},
			},
		],
	}
	return (
		<Styled.Carousel {...settings}>
			<Styled.Image src="./images/gallery/den3-min.jpg" />
			<Styled.Image src="./images/gallery/den4-min.jpg" />
			<Styled.Image src="./images/gallery/night1-min.jpg" />
			<Styled.Image src="./images/gallery/night2-min.jpg" />
			<Styled.Image src="./images/gallery/night3-min.jpg" />
			<Styled.Image src="./images/gallery/night4-min.jpg" />
			<Styled.Image src="./images/gallery/night5-min.jpg" />
			<Styled.Image src="./images/gallery/noch1-min.jpg" />
			<Styled.Image src="./images/gallery/posle1-min.jpg" />
			<Styled.Image src="./images/gallery/posle2-min.jpg" />
			<Styled.Image src="./images/gallery/posle3-min.jpg" />
			<Styled.Image src="./images/gallery/posle4-min.jpg" />
			<Styled.Image src="./images/gallery/posle5-min.jpg" />
			<Styled.Image src="./images/gallery/qq1-min.jpg" />
			<Styled.Image src="./images/gallery/qq4-min.jpg" />
			<Styled.Image src="./images/gallery/qq7-min.jpg" />
			<Styled.Image src="./images/gallery/qq8-min.jpg" />
			<Styled.Image src="./images/gallery/qq9-min.jpg" />
			<Styled.Image src="./images/gallery/qq13-min.jpg" />
			<Styled.Image src="./images/gallery/qq14-min.jpg" />
			<Styled.Image src="./images/gallery/qq15-min.jpg" />
		</Styled.Carousel>
	)
}

export default GalleryCarousel
