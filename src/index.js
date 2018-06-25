import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import { searchRobots } from './reducers';
import 'tachyons';

const store = createStore(searchRobots);

ReactDOM.render(
								<Provider store={store}>
									<App />
								</Provider>
								, document.getElementById('root'));
registerServiceWorker();
