import React from 'react';

// ReactDOM renderiza um elemento de React dentro do "container" fornecido.
import ReactDOM from 'react-dom';
import App from './components/App';

// { Provider } permite que todos os elementos dentro do mesmo "nested", tenham acesso à store.
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(

  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
  );