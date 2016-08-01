import React from 'react';
import ReactDOM from 'react-dom';
import APP from './containers/APP';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import Reducers  from './reducers'
import {INIT_EMPLOYEE} from "./actions";  

let store = createStore(Reducers);

//TODO определиться с инициализацией
store.dispatch( INIT_EMPLOYEE([
    {
      "guid": "10e49a2b-0910-49a4-94aa-f29311fd0f79",
      "age": 37,
      "name": {
        "first": "Flowers",
        "last": "Hatfield"
      },
      "email": "flowers.hatfield@undefined.us"
    },
    {
      "guid": "69827b93-1b7a-4475-9b27-5caffdf5257e",
      "age": 37,
      "name": {
        "first": "Whitney",
        "last": "Pope"
      },
      "email": "whitney.pope@undefined.net"
    },
    {
      "guid": "0f3808f9-6d86-4b1f-b305-7c17a30f2a63",
      "age": 34,
      "name": {
        "first": "Pacheco",
        "last": "Gilmore"
      },
      "email": "pacheco.gilmore@undefined.io"
    }
]) );

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <APP/>
  </Provider>,
  document.querySelector('#root')
);