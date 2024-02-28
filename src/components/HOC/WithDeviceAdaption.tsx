import { defineComponent, provide } from 'vue';

import { useDeviceStore } from '@/store';

export function WithDeviceAdaptation(PCComponent, MobileComponent) {
  return defineComponent({
    props: ['pcProps', 'mobileProps'],
    setup(props, { attrs, slots }) {
      const { isMobile } = useDeviceStore();

      provide('pcProps', props.pcProps)
      provide('mobileProps', props.mobileProps)
      console.log({ ...props.pcProps });


      return () => isMobile ?
        <MobileComponent {...{ ...props.mobileProps, ...attrs }} v-slots={slots} /> :
        <PCComponent {...{ ...props.pcProps, ...attrs }} v-slots={slots} />;
    },
  });
}