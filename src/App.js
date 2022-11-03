import React, { Component } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';

import Navbar from './components/pages/Navbar';
import Internships from './components/pages/Internships';
import Notfound from './components/pages/notfound';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Internships />
            </Navbar>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Navbar>
              <Notfound />
            </Navbar>
          }
        />
        <Route
          path="/apprenterships"
          element={
            <Navbar>
              <Notfound />
            </Navbar>
          }
        />
        <Route
          path="/internships"
          element={
            <Navbar>
              <Internships />
            </Navbar>
          }
        />
        <Route
          path="/jobs"
          element={
            <Navbar>
              <Notfound />
            </Navbar>
          }
        />
        <Route
          path="/settings"
          element={
            <Navbar>
              <Notfound />
            </Navbar>
          }
        />
      </Routes>
    );
  }
}

export default App;
