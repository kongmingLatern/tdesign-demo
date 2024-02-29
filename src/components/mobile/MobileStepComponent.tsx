import { defineComponent, inject, ref } from "vue";

import { useMessage } from "@/store";

export default defineComponent({
  name: 'mobileStep',
  setup(_, { emit }) {
    const age = ref((inject('mobileProps') as any).age)
    const message = useMessage()!

    const onChangeStepper = (e) => {
      message.warning('mobile', { marquee: true })
      emit('update', e)
    }
    return () =>
      <t-stepper
        v-model={age.value}
        theme="filled"
        onChange={onChangeStepper}
      />
  }
})