import { defineConfig } from 'vite'
import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx()],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src'),
		},
	},
})
