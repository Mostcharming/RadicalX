import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class notfound extends Component {
  render() {
    return (
      <div className="">
        <div className="internWrap">
          <div className="internWrap-header">
            <span className="internWrap-text">
              Page not found, Please go back to Internships
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default notfound;
