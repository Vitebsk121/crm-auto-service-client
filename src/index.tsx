import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Containers/App/App";
import { Provider } from "react-redux";
import store from "./store";


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,document.getElementById('app'));
