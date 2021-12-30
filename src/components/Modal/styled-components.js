import styled from 'styled-components'

const ModalBody = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000001;
	background-color: rgba(0, 0, 0, 0.808);
	width: 100vw;
	height: 100vh;
	display: ${(props) => (props.active ? 'flex' : 'none')};
	align-items: center;
	justify-content: center;
`

const Container = styled.div`
	max-width: 667px;
	width: 100%;
	margin: 0 16px;
	
	@media (max-width: 768px) {
		max-width: 440px;
	}
	@media (max-width: 440px) {
		max-width: 320px;
	}
	@media (max-width: 320px) {
		max-width: 200px;
	}
`

const Modal = styled.div`
	display: flex;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const ModalLogo = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	@media (max-width: 768px) {
		width: 100%;
	}
`

const LogoImg = styled.img`
	width: 150px;
	margin: 0 auto 25px;
	display: block;
	@media (max-width: 768px) {
		width: 100px;
		margin-bottom: 20px;
		margin-top: 30px;
	}
`

const LogoDesc = styled.p`
	color: #103260;
	font-size: 14px;
	font-weight: 400;
	font-style: italic;
	text-align: center;
	margin-bottom: 30px;
`

const ModalForm = styled.div`
	padding: 30px 20px;
	width: 50%;
	background-color: #1f2023;
	position: relative;

	@media (max-width: 768px) {
		width: 100%;
	}
`

const FormCloseBtn = styled.button`
	position: absolute;
	top: 6%;
	left: 90%;
	cursor: pointer;
	background: transparent;

	@media (max-width: 768px) {
		top: -47%;
	}
`

const FormTitle = styled.h5`
	color: #fff;
	font-size: 24px;
	line-height: 1.067em;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 20px;
`

const FormDesc = styled.p`
	margin-bottom: 20px;
	color: #fff;
	font-size: 14px;
	font-size: 700;
`

const FormInpt = styled.input`
	width: 97%;
	border-radius: none;
	border: 1px solid #dedede;
	padding: 10px;
	color: #777;
	margin-bottom: 10px;
	font-size: 12px;
	font-weight: 400;
	outline: none;
`

const FormBtn = styled.button`
	width: 97%;
	border: none;
	padding: 6px;
	border-radius: none;
	height: 32px;
	color: #000000;
	font-weight: 700;
	font-size: 14px;
	background-color: #b3b3b3;
	margin-bottom: 20px;
	cursor: pointer;
`

const FormDevider = styled.hr`
	line-height: 1em;
	width: 97%;
	position: relative;
	font-weight: 700;
	font-size: 12px;
	outline: 0;
	border: 0;
	text-align: center;
	height: 1.5em;
	opacity: .5;
	&:before {
		content: '';
		background: linear-gradient(to right, transparent, #818078, transparent);
		position: absolute;
		left: 0;
		top: 50%;
		width: 100%;
		height: 1px;
	}
	&:after {
		content: attr(data-content);
		position: relative;
		display: inline-block;
		color: black;
		padding: 0 .5em;
		line-height: 1.5em;
		color:#c5c5c5;
		background-color: #1f2023;
	}
`

const FormTel = styled.a`
	display: block;
	text-align: center;
	width: 97%;
	padding-top: 6px;
	padding-bottom: 6px;
	border: none;
	border-radius: none;
	height: 32px;
	color: #000000;
	font-weight: 700;
	font-size: 14px;
	background-color: #b3b3b3;
	margin: 0px;
	margin-top: 20px;
	margin-bottom: 20px;
	cursor: pointer;
`

const FormDescTwo = styled.p`
	font-size: 12px;
	color: #c5c5c5;
	font-weight: 400;
	margin-top: 20px;
`

const Styled = {
	ModalBody,
	Container,
	Modal,
	ModalLogo,
	LogoImg,
	LogoDesc,
	ModalForm,
	FormCloseBtn,
	FormTitle,
	FormDesc,
	FormInpt,
	FormBtn,
	FormDevider,
	FormTel,
	FormDescTwo,
}

export default Styled
