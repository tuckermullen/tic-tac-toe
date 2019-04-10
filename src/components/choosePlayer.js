import React from 'react'
import { Button } from 'react-bootstrap';

class ChoosePlayer extends React.Component {

  handleForm(e) {
      e.preventDefault()
      this.props.player(e.target.player.value)
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleForm(e)}>
          <label className="player-text">
            Player: X
            <input className="button" type="radio" name="player" value="X"/>
          </label>
          <label className="player-text">
            Player: O
            <input type="radio" name="player" value="O"/>
          </label>
          <br/>
          <input className="button" type="submit" value="Start" />
        </form>
      </div>
    )
  }
}

export default ChoosePlayer
