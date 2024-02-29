import { getCurrentInstance } from 'vue'

export function Message() {
	const instance = getCurrentInstance()
	console.log('instance', instance)
	return instance?.proxy?.$message
}
