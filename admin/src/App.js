import React, { Component } from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = "/" component = {Login} />
      </Switch>
    );
  }
}

export default App;