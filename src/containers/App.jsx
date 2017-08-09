import React from 'react';

import './App.css';

import H1 from '../components/H1';
import TodoContainer from '../containers/Todo';

export default () => (
	<div className="app">
		<H1 className="text-center">TODO App</H1>
		<TodoContainer />
	</div>
);