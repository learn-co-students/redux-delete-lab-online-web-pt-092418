import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from "./Band"
import { connect } from 'react-redux'

class BandsContainer extends Component {
    addBand = (name) => {
      this.props.addBand(name)
    };
      deleteBand = (id) => {
        this.props.deleteBand(id)
      };
    renderBands = () => {return this.props.bands.map(band => <Band key={band.id} band={band} deleteBand={id => this.props.deleteBand(id)}></Band>);
    }
    render() {
    return (
      <div>
        <BandInput addBand={name => this.props.addBand(name)}/>
        {this.renderBands()}
        <button deleteBand={id => this.props.deleteBand(id)} />

      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id  => dispatch({type: 'DELETE_BAND', id}),
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
