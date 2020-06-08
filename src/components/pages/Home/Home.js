import React from 'react';

import authData from '../../../helpers/data/authData';
import ScatCard from '../../shared/ScatCard/ScatCard';
import scatData from '../../../helpers/data/scatData';


import './Home.scss';

class Home extends React.Component {
  state = {
    scats: [],
  }

  getScats = () => {
    const uid = authData.getUid();
    scatData.getScatsByUid(uid)
      .then((scats) => this.setState({ scats }))
      .catch((err) => console.error('could not get scats: ', err));
  }

  componentDidMount() {
    this.getScats();
  }

  render() {
    const { scats } = this.state;
    const buildScatCards = scats.map((scat) => (
      <ScatCard scat={scat}/>
    ));

    return (
      <div className="Home">
        <h1>Home</h1>
        <div className="d-flex flex-wrap">
          {buildScatCards}
        </div>
      </div>
    );
  }
}

export default Home;
