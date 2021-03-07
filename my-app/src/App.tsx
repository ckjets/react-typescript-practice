import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom'

import Home from './Pages/Home/index';
import Demo from './Pages/Demo/index'

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/about" component={About} /> */}
      <Route exact path="/demo" component={Demo} />

    </Switch>
  </Router>
  )
}

export default App;
