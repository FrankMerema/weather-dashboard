import { mount } from '@vue/test-utils';
import Icon from '@/components/icons/Icon.vue';

describe('Icon', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Icon, { props: { icon: 'ws-test' } });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
