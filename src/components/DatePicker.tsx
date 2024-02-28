import { defineComponent, ref, watch } from 'vue';

import { useDeviceStore } from '@/store';

export default defineComponent({
  props: {
    date: {
      type: String
    },
  },
  emits: ['update:date', 'ok'],
  setup(props, { emit, attrs }) {
    const date = ref(props.date)
    const visible = ref(false)
    const { isMobile } = useDeviceStore()
    const handleChange = (newDate) => {
      emit('update:date', newDate);
      date.value = newDate;
    };

    watch(() => props.date, (newVal) => {
      date.value = newVal;
    });

    const handleConfirm = (newValue) => {
      handleChange(newValue)
      emit('ok', newValue)
      visible.value = false;
    }

    console.log('datePicker', date.value);
    return () =>
      isMobile ? (
        <>
          <t-cell note={date.value || '年月日'} onClick={() => visible.value = true} />
          <t-popup v-model={visible.value} placement="bottom">
            <t-date-time-picker
              value={date.value}
              mode="date"
              title="选择日期"
              format="YYYY-MM-DD"
              onConfirm={handleConfirm}
              {...attrs}
            />
          </t-popup>
        </>
      ) : (
        <t-date-picker
          v-model={date.value}
          placeholder="可清除、可输入的日期选择器"
          clearable
          allow-input
          onChange={handleChange}
          {...attrs}
        />
      )
      ;
  },
})