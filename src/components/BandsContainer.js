import React, { Component } from 'react'
import BandInput from './BandInput';

import { connect } from 'react-redux'

class BandsContainer extends Component {
    addBand = (name) => {
      this.props.addBand({name})
    }
  render() {
    return (
      <div>
        <BandInput addBand={(name) => this.props.addBand(name)}/>

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
