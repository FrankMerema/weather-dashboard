import { mount, shallowMount } from '@vue/test-utils';
import Button from './Button';

describe('Button', () => {
  test('is a Vue component', () => {
    const wrapper = mount(Button);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});

describe('Button snapshot', () => {
  test('render a disabled button', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        disabled: true
      },
      slots: {
        default: 'Disabled button'
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test('render a submit button', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        type: 'submit'
      },
      slots: {
        default: 'Submit button'
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
