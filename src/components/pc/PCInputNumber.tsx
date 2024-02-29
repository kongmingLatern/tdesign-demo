import { defineComponent, inject, ref } from "vue";

import { MessagePlugin } from 'tdesign-vue-next';

export default defineComponent({
  name: 'PCInputNumber',
  setup(_, { emit, attrs }) {
    const age = ref((inject('pcProps') as any).age);
    console.log('render', age.value);
    const onChange = (e) => {
      console.log(e);
      MessagePlugin.info('123')
      emit('update', e)
    }
    return () => <t-input-number v-model={age.value} step="1" min="1" max="30" auto-width {...attrs} onChange={onChange} />
  }
})
