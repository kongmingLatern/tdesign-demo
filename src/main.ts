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
	const modules = await import('tdesign-mobile-vue')
	function createWrapperMessage(
		originMessage: typeof modules.Message
	) {
		// 辅助函数，用于处理消息显示的逻辑
		function handleMessage(type, args) {
			const isObject = typeof args[0] === 'object'
			const defaultContext = document.querySelector('#app')

			const params = isObject
				? {
						...args[0],
						context: args[0].context || defaultContext,
						...args[1],
				  }
				: {
						content: args[0],
						icon: true,
						zIndex: 10000,
						context: defaultContext,
						...args[1],
				  }

			originMessage[type](params)
		}

		return {
			...originMessage,
			info: (...args) => handleMessage('info', args),
			warning: (...args) => handleMessage('warning', args),
			success: (...args) => handleMessage('success', args),
			error: (...args) => handleMessage('error', args),
		}
	}
	app.use(modules)
	app.config.globalProperties.$message =
		createWrapperMessage(modules.Message)
} else {
	await import('tdesign-vue-next/es/style/index.css')
	const modules = await import('tdesign-vue-next')
	app.use(modules)
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
