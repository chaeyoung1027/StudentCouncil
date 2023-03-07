import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
    return (
<Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path="*" element={<h1>404 페이지</h1>}/>
    </Switch>
	</Router>
    );
}

export default App;