import React from 'react';

// ReactDOM renderiza um elemento de React dentro do "container" fornecido.
import ReactDOM from 'react-dom';
import App from './components/App';

//import rootReducer from './reducers/usersReducers';

// { Provider } permite que todos os elementos dentro do mesmo "nested", tenham acesso à store.
import { Provider } from 'react-redux';

// Permite criar uma { store }
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//const store = createStore(rootReducer);



ReactDOM.render(
    {/*
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
    */}
  );