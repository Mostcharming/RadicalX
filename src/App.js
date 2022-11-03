import React, { Component } from 'react';
import { Routes, Route, Link, Redirect } from 'react-router-dom';

import Navbar from './components/pages/Navbar';
import Internships from './components/pages/Internships';

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
              <Internships />
            </Navbar>
          }
        />
        <Route
          path="/apprenterships"
          element={
            <Navbar>
              <Internships />
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
              <Internships />
            </Navbar>
          }
        />
        <Route
          path="/settings"
          element={
            <Navbar>
              <Internships />
            </Navbar>
          }
        />
      </Routes>
    );
  }
}

export default App;
