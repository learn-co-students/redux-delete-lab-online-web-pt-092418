import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
   console.log('handleClick: ', this.props)
   this.props.deleteBand(this.props.id)
 }

  render() {
    return(
      <div>
        <span>
          <ul>
            <li>
              {this.props.name}
            </li>
            <button onClick={this.handleClick}>Delete</button>
          </ul>
        </span>
      </div>
    );
  }
};

export default Band;
