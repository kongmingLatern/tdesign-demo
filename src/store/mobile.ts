import { defineStore } from 'pinia'

export const useDeviceStore = defineStore('device', {
	state: () => ({
		isMobile: false,
	}),
	actions: {
		setIsMobile(value) {
			this.isMobile = value
		},
	},
})
