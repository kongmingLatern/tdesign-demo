import { defineComponent, inject, ref } from "vue";

export default defineComponent({
  name: 'mobileStep',
  setup(_, { emit }) {
    const age = ref((inject('mobileProps') as any).age)
    const onChangeStepper = (e) => {
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