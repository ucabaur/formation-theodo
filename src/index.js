import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import TodoContainer from './component/TodoContainer'

render(
  <div>
    <TodoContainer />
  </div>,
  document.getElementById('app')
);
