import { WithDeviceAdaptation } from '@/components/HOC/WithDeviceAdaption'
import { defineStore } from 'pinia'
import { h } from 'vue'

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

export const useHocComponent = (
	PcComponent,
	MobileComponent,
	options?,
	callback?
) => {
	const HocComponent = WithDeviceAdaptation(
		PcComponent,
		MobileComponent
	)
	return h(HocComponent, {
		pcProps: options.pcProps,
		mobileProps: options?.mobileProps,
		onUpdate(e) {
			callback.onUpdate(e, options)
		},
	})
}
