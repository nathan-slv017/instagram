import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Container from './Container';
import Login from './pages/login/Login';
import Story from './pages/story/Story';

function App() {
  return (
    <>
      <Router>

        <Route component={Container} path="/" exact />
        <Route component={Login} path="/login" exact />
        <Route component={Story} path="/story:id" />
      </Router>
    </>
  );
}

export default App;
