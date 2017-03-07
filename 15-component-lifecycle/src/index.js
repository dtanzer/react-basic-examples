import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import { HeaderContainer } from './Header';
import { MainSectionContainer } from './MainSection';

import tabsReducer from './tabsReducer';
import stationsReducer from './stations/stationsReducer'

const reducer = combineReducers({
	tabs: tabsReducer,
	stations: stationsReducer
});
let store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<div>
			<HeaderContainer />
			<MainSectionContainer />
		</div>
	</Provider>,
	document.getElementById('root')
);
