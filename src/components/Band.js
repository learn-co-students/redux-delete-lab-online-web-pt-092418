import React, { Component } from 'react';

class Band extends Component {

  render() {
    // const bandList = (this.props.bands.map(band => <li>{band.name}</li>));
    return(
      
        <li>
          {this.props.band.name}
        </li>
    ); 
    
  }
};

export default Band;
