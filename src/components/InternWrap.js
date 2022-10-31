import React, { Component } from 'react';

import Navbar from './pages/Navbar';
import Internships from './pages/Internships';
import './static/style.css';

class InternWrap extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Internships />
      </div>
    );
  }
}

export default InternWrap;
