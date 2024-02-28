import App from './App.vue'
import { createApp } from 'vue'

const userAgent = navigator.userAgent

// 简单的检测示例
const isMobile =
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		userAgent
	)
const app = createApp(App)

if (isMobile) {
	app.use(await import('tdesign-mobile-vue'))
} else {
	app.use(await import('tdesign-vue-next'))
}

app.mount('#app')
