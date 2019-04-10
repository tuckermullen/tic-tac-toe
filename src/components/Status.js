import React from 'react'
import ChoosePlayer from './choosePlayer'

class Status extends React.Component {
  handleSetPlayer = (e) => {
      this.props.setPlayer(e)
  }

  renderHtml = () => {
    if (this.props.winner) {
      return (<p className="para-tags">Winner is: {this.props.winner}</p>)
    } else {
      return this.props.player ?
        <p className="para-tags">Current Turn: {this.props.player}</p> :
        <ChoosePlayer player={(e) => this.handleSetPlayer(e)} />
    }
  }

  render() {
    return(
      <div>{ this.renderHtml() }</div>
    )
  }
}

export default Status
