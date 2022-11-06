import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Internships from './components/pages/Internships';
import Notfound from './components/pages/notfound';
import NewInternWrap from './components/pages/sub-pages/newInternWrap';
import Description from './components/pages/sub-pages/newIntern-pages/internshipDescription';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route
          path="/newIntern"
          element={
            <NewInternWrap>
              <Description />
            </NewInternWrap>
          }
        />
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
