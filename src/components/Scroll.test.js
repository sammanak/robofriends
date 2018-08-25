import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

it('renders Scroll component', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
})