/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AddTodo from './components/addTodo/addTodo';

it('App renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});

it('App includes Todo component', () => {
  const component = shallow(<AddTodo submitTodo={() => {}} />);
  expect(component.exists()).toEqual(true);
});
