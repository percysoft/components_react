import * as React from 'react';
import {  mount } from 'enzyme';
import { ShimmerEffect } from './index';

describe('Shimmer component', () => {
  describe('Render snapshot', () => {
    test('Render correctly', () => {
      const wrapper = mount(
        <ShimmerEffect/>);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
