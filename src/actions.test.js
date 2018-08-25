import * as actions from './actions';

import { 
  CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED 
} from './constants.js'

// import fetch from 'node-fetch';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk'; 
// import fetchMock from 'fetch-mock';
import fetch from 'isomorphic-fetch';

const mockStore = configureMockStore([thunkMiddleware]); // Create Test Store

it('should create an action to search robots', () => {

  const text = 'woooooo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('handles REQUEST_ROBOTS_PENDING', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  }
  expect(action[0]).toEqual(expectedAction);
  
})



// it('handles RQUEST_ROBOTS_SUCCESS', () => {
  // const mockData = [{
  //   id: 123,
  //   name: "test",
  //   email: "test@gmail.com"
   
  // }];
    
  // const jsonMockData = JSON.stringify(mockData);

  // window.fetch = jest.fn().mockImplementation(() =>
  // Promise.resolve(mockResponse(200, null, jsonMockData)))

//  })
  
