import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api/module',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
	],
	components: true,
	generate: {
		interval: 2000,
	},
	googleFonts: {
		display: 'swap',
		families: {
			'Titillium+Web': [400, 600, 700],
		},
	},
	modules: ['@nuxt/content'],
	srcDir: 'src',
	target: 'static',
}

export default config
