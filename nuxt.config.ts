// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: ['@nuxtjs/i18n', '@pinia/nuxt'],

	// Disable experimental app manifest to fix Vite resolution issues
	experimental: {
		appManifest: false,
	},

	i18n: {
		locales: [
			{ code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
			{ code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
			{ code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
		],
		defaultLocale: 'en',
		lazy: false,
		langDir: 'locales',
		strategy: 'prefix_except_default',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
			alwaysRedirect: false,
			fallbackLocale: 'en',
		},
		bundle: {
			optimizeTranslationDirective: false,
		},
		compilation: {
			strictMessage: false,
		},
	},

	runtimeConfig: {
		mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/compease',
		public: {
			appName: 'Compease',
		},
	},

	app: {
		head: {
			title: 'Compease',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
	},

	css: ['~/assets/css/main.css'],

	compatibilityDate: '2024-01-01',
});
