import React, { Component } from 'react'
import Viewer from './Viewer'
import Tracker from './Tracker'
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
    <Router>
      <Route path="/" exact component={Viewer}/>
      <Route path="/tracker"  component={Tracker}/>
    </Router>
      </div>
    )
  }
}
