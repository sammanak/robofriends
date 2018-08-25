import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';

it('renders Hello component', () => {
  expect(shallow(<Hello />)).toMatchSnapshot();
})