import React, { Component } from 'react';

class Band extends Component {

  render() {
    debugger
    // const bandList = (this.props.bands.map(band => <li>{band.name}</li>));
    return(
      
        <li>
          {this.props.band.name}<span><button
          onClick={() =>this.props.deleteBand(this.props.band.id)}>Delete</button></span>
        </li>
    ); 
    
  }
};

export default Band;
