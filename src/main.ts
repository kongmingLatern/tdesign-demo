import App from './App'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useDeviceStore } from './store'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

const isMobile = getDevice()

if (isMobile) {
	await import('tdesign-mobile-vue/es/style/index.css')
	app.use(await import('tdesign-mobile-vue'))
} else {
	await import('tdesign-vue-next/es/style/index.css')
	app.use(await import('tdesign-vue-next'))
}

app.mount('#app')

function getDevice() {
	const userAgent = navigator.userAgent
	const isMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			userAgent
		)
	const deviceStore = useDeviceStore()
	deviceStore.setIsMobile(isMobile)
	return isMobile
}
