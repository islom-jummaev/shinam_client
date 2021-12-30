import i18next from 'i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'


i18next
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ['uz', 'ru'],
		fallbackLng: 'uz',
		lng: 'uz',
		debug: false,
		// Options for language detector
		detection: {
			order: ['path', 'cookie', 'htmlTag'],
			caches: ['cookie'],
		},
		backend: {
			loadPath: '/locales/{{lng}}/translation.json',
		},
	})
