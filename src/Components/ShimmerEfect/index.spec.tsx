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

describe('Shimmer component', () => {
  describe('Render snapshot with propertys', () => {
    test('Render correctly', () => {
      const wrapper = mount(
        <ShimmerEffect
          width= "500px"
          heigth= "40px"
        />);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
