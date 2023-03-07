import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Club from './components/pages/Club';

function App() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="*" element={<h1>404 페이지</h1>}/>
          <Route path="/club" component={Club}/>
        </Switch>
      </Router>
    );
}

export default App;