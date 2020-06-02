import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="myNavbar">
        <nav className="navbar navbar-expand-lg bg-info">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="navbar-brand" href="#">Scat Surprise</a>
          {/* eslint-disable-next-line max-len */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <button className="btn btn-outline-dark" onClick={this.logMeOut}>Logout</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
