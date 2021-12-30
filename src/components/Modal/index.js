import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import axios from 'axios'
import Styled from './styled-components'
import { useTranslation } from 'react-i18next'

const Modal = ({ classNames, ...props }, ref) => {
	const [isOpen, setIsOpen] = useState(false)
	const form = useRef()

	useImperativeHandle(ref, () => ({
		show() {
			setIsOpen(true)
		},
	}))

	const handleHideModal = () => {
		setIsOpen(false)
	}
	
	axios.defaults.withCredentials = true

	const handleStoreLead = (event) => {
		event.preventDefault()
		const formElements = event.target.elements

		axios
			.post('http://localhost:8000/api/leads', {
				name: formElements['name'].value,
				phone: formElements['phone'].value,
			})
			.then((response) => {
				setIsOpen(false)
			})
			.catch((error) => {
				console.log(error)
			})
	}
	
	const { t } = useTranslation()

	return (
		<Styled.ModalBody active={isOpen} className={classNames} {...props}>
			<Styled.Container>
				<Styled.Modal>
					<Styled.ModalLogo>
						<div>
							<Styled.LogoImg src="images/Modal/logo.svg" />
							{/* <Styled.LogoDesc>
								{t("yaratish uchun san'at!")}
							</Styled.LogoDesc> */}
						</div>
					</Styled.ModalLogo>
					<Styled.ModalForm>
						<Styled.FormCloseBtn>
							<img
								title="close"
								src="/images/Modal/close.svg"
								alt="Please wait!"
								onClick={() => handleHideModal()}
							/>
						</Styled.FormCloseBtn>
						<form onSubmit={handleStoreLead} ref={form}>
							<Styled.FormTitle>
								{t("BIZ SIZGA QO'NG'IROL QILAMIZ")}
							</Styled.FormTitle>
							<Styled.FormDesc>
								{t('Raqamingizni qoldiring va biz')}
								<br />{' '}
								{t("biz sizga qayta qo'ng'iroq qilamiz.")}
							</Styled.FormDesc>
							<Styled.FormInpt
								type="text"
								placeholder="Имя"
								name="name"
							/>
							<Styled.FormInpt
								type="tel"
								placeholder="Телефон"
								maxlength="13"
								name="phone"
							/>
							<Styled.FormBtn type="submit">
								{t("Men qo'ng'iroqni kutmoqdaman")}
							</Styled.FormBtn>
							<Styled.FormDevider data-content={t('Yoki')} />
							<Styled.FormTel
								href="tel: +998998535555"
								target="_blank"
							>
								{t("Hozir qo'ng'iroq qiling")}
							</Styled.FormTel>
							<Styled.FormDescTwo>
								{t(
									"E'tibor bering, xizmatning ishlash tartibi\n" +
										"9:00 dan boshlab qo'llab -quvvatlash"
								)}
								{t('soat 21:00 gacha')}
							</Styled.FormDescTwo>
						</form>
					</Styled.ModalForm>
				</Styled.Modal>
			</Styled.Container>
		</Styled.ModalBody>
	)
}

export default forwardRef(Modal)
