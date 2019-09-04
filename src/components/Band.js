import React, { Component } from 'react';
import BandInput from './BandInput'
class Band extends Component {

  render() {
    const bandlist = (this.props.bands.map(band => <li>{band.name}</li>));
    return(
      <div>
        <ul>
          {bandList}
        </ul>
        Band Component
      </div>
    );
  }
};

export default Band;
