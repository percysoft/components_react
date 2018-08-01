import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Loader } from './index';

describe('Loader Component', () => {
  describe('Render snapshot', () => {
    test('Render correctly Loader with number parameter', () => {
      const wrapper = mount(
          <Loader heightLoader={100}/>);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
