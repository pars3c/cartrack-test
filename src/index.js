import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FavoriteRecipeList from './components/FavoriteRecipeList';
import rootReducer from './reducers/usersReducers';

// { Provider } permite que todos os elementos dentro do mesmo "nested", tenham acesso à store
import { Provider } from 'react-redux';

// Permite criar uma { store }
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const store = createStore(rootReducer);



ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={App} />
        <Route exact={true} path='/favorites' component={FavoriteRecipeList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
  );