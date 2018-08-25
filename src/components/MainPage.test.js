import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';
import { wrap } from 'module';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage { ...mockProps } />);
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly first', () => {
  const mockPropsFirst = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false
  }
  const wrapperFirst = shallow(<MainPage { ...mockPropsFirst } />);
  // expect(wrapper2.instance().filteredRobots()).toEqual([]); // searchField: 'a'
  expect(wrapperFirst.instance().filteredRobots()).toEqual([{
    id: 3,
    name: 'John',
    email: 'john@gmail.com'
  }]);
})

it('filters robots correctly second', () => {
  const mockPropsSecond = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'a',
    isPending: false
  }
  const wrapperSecond = shallow(<MainPage { ...mockPropsSecond } />);
  expect(wrapperSecond.instance().filteredRobots()).toEqual([]);
})

it('filters robots correctly third', () => {
  const mockPropsThird = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: '',
    isPending: true
  }
  const wrapperThird = shallow(<MainPage { ...mockPropsThird } />);
  expect(wrapperThird.instance().filteredRobots()).toEqual([{
    id: 3,
    name: 'John',
    email: 'john@gmail.com'
  }]);
})