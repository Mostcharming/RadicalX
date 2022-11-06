import { Link } from 'react-router-dom';

function notfound() {
  return (
    <div className="">
      <div className="internWrap">
        <div className="internWrap-header">
          <span className="internWrap-text">
            Page not found, Please go back to <br />
            <Link to="/internships">Internships</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default notfound;
