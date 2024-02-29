import { defineComponent, inject, ref } from "vue";

import { useMessage } from "@/store";

export default defineComponent({
  name: 'PCInputNumber',
  setup(_, { emit, attrs }) {
    const age = ref((inject('pcProps') as any).age);
    const message = useMessage()!
    console.log('render', age.value);
    const onChange = (e) => {
      message.warning('pc')
      emit('update', e)
    }
    return () => <t-input-number v-model={age.value} step="1" min="1" max="30" auto-width {...attrs} onChange={onChange} />
  }
})
