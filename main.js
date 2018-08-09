import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { ReduxApp } from './ReduxApp';

ReactDOM.render(

    <Provider store={store}>
         <ReduxApp/>
    </Provider>,
    document.getElementById('app')
);