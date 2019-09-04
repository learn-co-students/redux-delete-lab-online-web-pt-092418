import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from "./Band"
import { connect } from 'react-redux'

class BandsContainer extends Component {
    addBand = (name) => {
      this.props.addBand(name)
    }
    renderBands = () => {this.props.bands.map(band => <Band key={band.id} band={band}></Band>);
    }
    render() {
    return (
      <div>
        <BandInput addBand={name => this.props.addBand(name)}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
