import { defineComponent, inject, ref } from "vue"

export default defineComponent({
	inheritAttrs: false,
	setup(props, { attrs, emit }) {
		const value = ref((inject('pcProps') as any).birth)
		console.log(props, attrs)

		const updateValue = newVal => {
			value.value = newVal
			emit('update', newVal)
		}

		return () => <t-date-picker
			v-model={value.value}
			placeholder="可清除、可输入的日期选择器"
			clearable
			allow-input
			onChange={updateValue}
			{...attrs}
		/>
	},
})

