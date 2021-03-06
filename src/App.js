import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ShoppingList from './components/shoppinglist/ShoppingList'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={ShoppingList} />
            <Route path='/shopping-list' component={ShoppingList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
