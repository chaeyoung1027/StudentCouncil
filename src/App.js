import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import HomeIntent from './components/pages/HomeIntent';
import Club from './components/pages/Club';
import SchEvent from './components/pages/SchoolEvent';

function App() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/homeintent' component={HomeIntent} />
          <Route path='/club' component={Club} />
          <Route path='/schoolevent' component={SchEvent} />
          <Route path="*" element={<h1>404 페이지</h1>}/>
        </Switch>
      </Router>
    );
}

export default App;