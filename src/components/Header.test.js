import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders Header component', () => {
  const mockProps = true;
  const wrapper = shallow(<Header {...mockProps} />);
  const shouldUpdate = wrapper.instance().shouldComponentUpdate();
  expect(shouldUpdate).toBe(false)
  // expect(shallow(<Header />)).toMatchSnapshot();
})