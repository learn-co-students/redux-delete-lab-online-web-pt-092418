import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {
    addBand = () => {
      this.props.addBand()
    }
    renderBand = () => this.props.bands.map((name, id) => <li key={id} name={name}/>)
  render() {
    return (
      <div>
        <BandInput addBand={(name) => this.props.addBand(name)}/>
        {this.renderBand()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
