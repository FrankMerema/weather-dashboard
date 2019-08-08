import { mount } from '@vue/test-utils';
import Icon from './Icon';

describe('Icon', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Icon, { propsData: { icon: 'test' } });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('check if svg icon gets prefixed', () => {
    const wrapper = mount(Icon, { propsData: { icon: 'test' } });

    expect(wrapper.find('svg use').attributes('href')).toEqual('#ws-test');
  });
});

describe('Icon snapshot', () => {
  test('render logo icon correctly', () => {
    const wrapper = mount(Icon, {
      propsData: {
        icon: 'logo'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
