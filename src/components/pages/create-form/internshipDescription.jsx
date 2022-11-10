import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ButtonCursor.css';

import Benefits from './formPopups/Benefits';
import Category from './formPopups/Category';
import Description from './formPopups/Description';
import IntroVideo from './formPopups/IntroVideo';
import Location from './formPopups/Location';
import MentorDetails from './formPopups/MentorDetails';
import Roles from './formPopups/Roles';
import WebLinks from './formPopups/WebLinks';
import { ReactComponent as InactiveArrow } from './formPopups/icons/inactiveArrow.svg';
import { ReactComponent as ActiveArrow } from './formPopups/icons/activeArrow.svg';
import { ReactComponent as TickDone } from './formPopups/icons/tickDone.svg';

function InternDescription() {
  const [active, setActive] = useState('');
  const [cat, catDone] = useState('');
  const [des, desDone] = useState('');

  return (
    <div className="all">
      <div className="subbar">
        <div className="subbar-iconText">
          <div className="subbar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="subbar-text">Internship Description</span>
        </div>
        <div className="subbar-iconText guide">
          <div className="subbar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="subbar-text guide">Internship Guide</span>
        </div>
        <div className="subbar-iconText surveys">
          <div className="subbar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="subbar-text survey">Surveys</span>
        </div>
        <div className="subbar-iconText settings">
          <div className="subbar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="subbar-text settings">Settings</span>
        </div>
      </div>
      <div className="mainbar">
        <div className="mainbar-back">
          <Link to="/internships">
            <div className="mainbar-back-iconText">
              <div className="mainbar-back-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.165 6.91846L4.08337 14.0001L11.165 21.0818"
                    stroke="#793EF5"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.9567 14H4.08337"
                    stroke="#793EF5"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.7183 14H19.6583"
                    stroke="#793EF5"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="subbar-text mainbarback">Back</span>
            </div>
          </Link>
        </div>
        <div className="mainbar-mid">
          <span className="subbar-text mainbarmid">Add New Internship</span>
        </div>
        <div className="mainbar-back nxtbtn">
          <div className="cont-btn" to="/guide">
            <span className="subbar-text mainbarcont">
              Continue to Next Step
            </span>
            <div className="mainbar-nxticon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.025 4.94189L17.0833 10.0002L12.025 15.0586"
                  stroke="#828282"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.17499 10H16.9417"
                  stroke="#828282"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91666 10H5.80832"
                  stroke="#828282"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar-tiles">
          <div className="sidebar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.48999 12H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H5.99"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button
            onClick={() => setActive('Category')}
            type="submit"
            className={`sidebar-tile ${active === 'Category' ? 'active' : ''}`}
          >
            <div className="sidebar-icon2text">
              <span className="sidebar-text">Category</span>
              <div className="check-icon">
                {cat === 'catDone' ? <TickDone /> : ''}
              </div>
            </div>
            <div
              className={`sidebar-tile-arrow ${
                active === 'Category' ? 'active' : ''
              }`}
            >
              {active === 'Category' ? <ActiveArrow /> : <InactiveArrow />}
            </div>
          </button>
        </div>
        <div className="sidebar-tiles desc">
          <div className="sidebar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.48999 12H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H5.99"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button
            onClick={() => setActive('Description')}
            type="submit"
            className={`sidebar-tile ${
              active === 'Description' ? 'active' : ''
            }`}
          >
            <div className="sidebar-icon2text">
              <span className="sidebar-text desc">Description</span>
              <div className="check-icon des">
                {des === 'desDone' ? <TickDone /> : ''}
              </div>
            </div>
            <div
              className={`sidebar-tile-arrow ${
                active === 'Description' ? 'active' : ''
              }`}
            >
              {active === 'Description' ? <ActiveArrow /> : <InactiveArrow />}
            </div>
          </button>
        </div>
        <div className="sidebar-tiles loc">
          <div className="sidebar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.48999 12H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H5.99"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button
            onClick={() => setActive('Location')}
            type="submit"
            className="sidebar-tile"
          >
            <div className="sidebar-icon2text">
              <span className="sidebar-text loc">Location</span>
              <div className="check-icon"></div>
            </div>
            <div className="sidebar-tile-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8486 13.1442L14.8464 13.1464L9.66644 18.3264C9.3005 18.6923 8.67999 18.4332 8.67999 17.9199V12.3099V6.07993C8.67999 5.56691 9.30183 5.30606 9.66793 5.66497L12.8764 8.87348L14.8464 10.8435C15.4824 11.4794 15.4793 12.5212 14.8486 13.1442L14.8486 13.1442Z"
                  fill="#1E1E1E"
                  stroke="#1E1E1E"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="sidebar-tiles ben">
          <div className="sidebar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.48999 12H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H5.99"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button
            onClick={() => setActive('Benefits')}
            type="submit"
            className="sidebar-tile"
          >
            <div className="sidebar-icon2text">
              <span className="sidebar-text ben">Benefits</span>
              <div className="check-icon"></div>
            </div>
            <div className="sidebar-tile-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8486 13.1442L14.8464 13.1464L9.66644 18.3264C9.3005 18.6923 8.67999 18.4332 8.67999 17.9199V12.3099V6.07993C8.67999 5.56691 9.30183 5.30606 9.66793 5.66497L12.8764 8.87348L14.8464 10.8435C15.4824 11.4794 15.4793 12.5212 14.8486 13.1442L14.8486 13.1442Z"
                  fill="#1E1E1E"
                  stroke="#1E1E1E"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="sidebar-tiles intro">
          <div className="sidebar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.48999 12H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H5.99"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button
            onClick={() => setActive('IntroVideo')}
            type="submit"
            className="sidebar-tile"
          >
            <div className="sidebar-icon2text">
              <span className="sidebar-text intro">Intro Video</span>
              <div className="check-icon"></div>
            </div>
            <div className="sidebar-tile-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8486 13.1442L14.8464 13.1464L9.66644 18.3264C9.3005 18.6923 8.67999 18.4332 8.67999 17.9199V12.3099V6.07993C8.67999 5.56691 9.30183 5.30606 9.66793 5.66497L12.8764 8.87348L14.8464 10.8435C15.4824 11.4794 15.4793 12.5212 14.8486 13.1442L14.8486 13.1442Z"
                  fill="#1E1E1E"
                  stroke="#1E1E1E"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="sidebar-tiles ment">
          <div className="sidebar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.48999 12H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H5.99"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button
            onClick={() => setActive('MentorDetails')}
            type="submit"
            className="sidebar-tile"
          >
            <div className="sidebar-icon2text">
              <span className="sidebar-text ment">Mentor Details</span>
              <div className="check-icon"></div>
            </div>
            <div className="sidebar-tile-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8486 13.1442L14.8464 13.1464L9.66644 18.3264C9.3005 18.6923 8.67999 18.4332 8.67999 17.9199V12.3099V6.07993C8.67999 5.56691 9.30183 5.30606 9.66793 5.66497L12.8764 8.87348L14.8464 10.8435C15.4824 11.4794 15.4793 12.5212 14.8486 13.1442L14.8486 13.1442Z"
                  fill="#1E1E1E"
                  stroke="#1E1E1E"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="sidebar-tiles recom">
          <div className="sidebar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.48999 12H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H5.99"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button
            onClick={() => setActive('Roles')}
            type="submit"
            className="sidebar-tile"
          >
            <div className="sidebar-icon2text">
              <span className="sidebar-text reco">Recommended Roles</span>
              <div className="check-icon"></div>
            </div>
            <div className="sidebar-tile-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8486 13.1442L14.8464 13.1464L9.66644 18.3264C9.3005 18.6923 8.67999 18.4332 8.67999 17.9199V12.3099V6.07993C8.67999 5.56691 9.30183 5.30606 9.66793 5.66497L12.8764 8.87348L14.8464 10.8435C15.4824 11.4794 15.4793 12.5212 14.8486 13.1442L14.8486 13.1442Z"
                  fill="#1E1E1E"
                  stroke="#1E1E1E"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="sidebar-tiles web">
          <div className="sidebar-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.48999 12H21"
                stroke="#1E1E1E"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H5.99"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <button
            onClick={() => setActive('WebLinks')}
            type="submit"
            className="sidebar-tile"
          >
            <div className="sidebar-icon2text">
              <span className="sidebar-text web">
                Web Links &amp; Resources
              </span>
              <div className="check-icon"></div>
            </div>
            <div className="sidebar-tile-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8486 13.1442L14.8464 13.1464L9.66644 18.3264C9.3005 18.6923 8.67999 18.4332 8.67999 17.9199V12.3099V6.07993C8.67999 5.56691 9.30183 5.30606 9.66793 5.66497L12.8764 8.87348L14.8464 10.8435C15.4824 11.4794 15.4793 12.5212 14.8486 13.1442L14.8486 13.1442Z"
                  fill="#1E1E1E"
                  stroke="#1E1E1E"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="sidebar-tiles add">
          <div className="sidebar-add-icontext">
            <div className="sidebar-add-icontext icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66669 10H13.3334"
                  stroke="#793EF5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 13.3332V6.6665"
                  stroke="#793EF5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.50002 18.3332H12.5C16.6667 18.3332 18.3334 16.6665 18.3334 12.4998V7.49984C18.3334 3.33317 16.6667 1.6665 12.5 1.6665H7.50002C3.33335 1.6665 1.66669 3.33317 1.66669 7.49984V12.4998C1.66669 16.6665 3.33335 18.3332 7.50002 18.3332Z"
                  stroke="#793EF5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="subbar-text add">Add More</span>
          </div>
        </div>
      </div>
      <div className="Pops">
        {/* {active === 'Benefits' && <Benefits />} */}
        {active === 'Category' && (
          <Category onInputChange={() => catDone('catDone')} />
        )}
        {active === 'Description' && (
          <Description onChange={() => desDone('desDone')} />
        )}
        {/* {active === 'IntroVideo' && <IntroVideo />}
        {active === 'Location' && <Location />}
        {active === 'MentorDetails' && <MentorDetails />}
        {active === 'Roles' && <Roles />}
        {active === 'WebLinks' && <WebLinks />} */}
      </div>
    </div>
  );
}

export default InternDescription;
