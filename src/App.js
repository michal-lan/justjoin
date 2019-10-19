import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import OfferPage from './pages/offer/offer.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/all/:filterId' component={HomePage} />
          <Route path='/offers/:id' component={OfferPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
