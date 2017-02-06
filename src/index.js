import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import { loadTodos } from './action/todoActions';
import TodoContainer from './component/TodoContainer'

const store = configureStore();

store.dispatch(loadTodos());

render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>,
  document.getElementById('app')
);
