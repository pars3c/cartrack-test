import React from 'react';

// ReactDOM renderiza um elemento de React dentro do "container" fornecido.
import ReactDOM from 'react-dom';
import UserOverview from './components/userOverview/UserOverview';
import UserDetailed from './components/detailedUser/UserDetailed';

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
        <Route exact={true} path='/' component={UserOverview} />
        <Route exact={true} path='/detailed-user/:id' component={UserDetailed} />
      </Switch>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
  );