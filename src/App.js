import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Internships from './components/pages/Internships';
import Notfound from './components/pages/notfound';
import InternDescription from './components/pages/create-form/internshipDescription';
import InternshipGuide from './components/pages/create-form/intershipGuide';
import Settings from './components/pages/create-form/settings';
import Survey from './components/pages/create-form/surveys';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/create/description" element={<InternDescription />} />

        <Route path="/create/guide" element={<InternshipGuide />} />

        <Route path="/create/setting" element={<Settings />} />

        <Route path="/create/survey" element={<Survey />} />

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
