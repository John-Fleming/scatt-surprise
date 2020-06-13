import React from 'react';
import { Link } from 'react-router-dom';

import './SingleScat.scss';
import scatData from '../../../helpers/data/scatData';

class SingleScat extends React.Component {
  state = {
    scat: [],
  }

  componentDidMount() {
    const { scatId } = this.props.match.params;
    scatData.getSingleScat(scatId)
      .then((response) => this.setState({ scat: response.data }))
      .catch((err) => console.error('could not get single scat: ', err));
  }

  removeSingleScat = () => {
    const { scatId } = this.props.match.params;
    scatData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('could not delete scat: ', err));
  }

  render() {
    const { scat } = this.state;
    const { scatId } = this.props.match.params;
    const editLink = `/edit/${scatId}`;
    return (
      <div className="SingleScat" style={{ backgroundColor: scat.color }}>
        <h1>{scat.location}</h1>
        <p>Shape: {scat.shape}</p>
        <p>Size: {scat.size}</p>
        <p>Temperature: {scat.temperature}</p>
        <p>Viscosity: {scat.viscosity}</p>
        <p>Location: {scat.location}</p>
        <p>Notes: {scat.notes}</p>
        <p>Was it Fulfilling? {scat.wasFulfilling ? 'Yes' : 'No'}</p>
        <button className="btn btn-dark mx-1" onClick={this.removeSingleScat}><i className="fas fa-trash-alt"></i></button>
        <Link className="btn btn-dark mx-1" to={editLink}><i className="fas fa-pencil-alt"></i></Link>
      </div>
    );
  }
}

export default SingleScat;
