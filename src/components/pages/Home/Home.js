import React from 'react';
import './Home.scss';

import { Link } from 'react-router-dom';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const scatId = '12345';
    this.props.history.push(`/edit/${scatId}`);
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <button className="btn btn-outline-info" onClick={this.editEvent}>Edit a thing</button>
        <Link to='/scats/9867rf'>View Single</Link>
        <Link to='/new'>View New</Link>
      </div>
    );
  }
}

export default Home;
