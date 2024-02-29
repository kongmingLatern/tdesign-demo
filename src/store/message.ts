import { getCurrentInstance } from 'vue'

interface MessageType {
	info: (...args: any[]) => void
	warning: (...args: any[]) => void
	success: (...args: any[]) => void
	error: (...args: any[]) => void
}

export function useMessage(): MessageType | undefined {
	const instance = getCurrentInstance()

	if (instance && instance.proxy) {
		return instance.proxy.$message
	}

	console.warn(
		`useMessage hooks was used outside of setup()`
	)
	return
}
