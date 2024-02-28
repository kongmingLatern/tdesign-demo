import { defineComponent, inject, ref } from 'vue'

export default defineComponent({
	name: 'MobileDatePicker',
	inheritAttrs: false,
	setup(_, { attrs, emit }) {

		const value = ref((inject('mobileProps') as any).birth)
		const isDatePickerVisible = ref(false);

		// 更新日期并发出事件
		const updateDate = (newDate) => {
			value.value = newDate
		};

		// 确认日期选择
		const confirmDateSelection = (newDate) => {
			updateDate(newDate);
			isDatePickerVisible.value = false;
			emit('update', newDate)
		};


		return () => {
			return <>
				<t-cell note={value.value || '年月日'} onClick={() => isDatePickerVisible.value = true} />
				<t-popup v-model={isDatePickerVisible.value} placement="bottom">
					<t-date-time-picker
						value={value.value}
						mode="date"
						title="选择日期"
						format="YYYY-MM-DD"
						onConfirm={confirmDateSelection}
						{...attrs}
					/>
				</t-popup>
			</>

		}
	}
})