import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  let wrapper = mount(<App />);
});

it('has one button', () => {
  let wrapper = mount(<App />);
  expect(wrapper.find('#fetch-button').length).toBe(1);
});

it('has one text field', () => {
  let wrapper = mount(<App />);
  expect(wrapper.find('#fetch-text').length).toBe(1);
});

it('does not crash while button is clicked', () => {
  let wrapper = mount(<App />);
  wrapper.instance().fetchGoogle = jest.fn();
  wrapper.update();
  wrapper.find('#fetch-text').simulate('keydown', { which: 'a' });
  wrapper.find('#fetch-button').simulate('click');
});
