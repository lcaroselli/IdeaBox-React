import React from 'react';

let msg = 'swill'

export default class IdeaCard extends React.Component {
  constructor() {
    super();
    this.state = {
      swill: true,
      plausible: false,
      genius: false
    }
  }

  upQuality() {
    if(this.state.swill) {
      this.setState ({
        swill: false,
        plausible: true,
        genius: false
      })
    msg = <span> plausible </span>

    } else if (this.state.plausible) {
      this.setState ({
        swill: false,
        plausible: false,
        genius: true
      })
    msg = <span> genius </span>

    } else if (this.state.genius) {
      msg =  <span> genius </span>
    }
  }

  downQuality() {
    if(this.state.genius) {
      this.setState ({
        swill: false,
        plausible: true,
        genius: false
      })
    msg = <span> plausible </span>

    } else if (this.state.plausible) {
      this.setState ({
        swill: true,
        plausible: false,
        genius: false
      })
    msg = <span> swill </span>

  } else if (this.state.swill) {
      msg =  <span> swill </span>
    }
  }

  render() {


  return (
    <div className="idea-card">
      <p className="card-title">{ this.props.title }
        <button
          className="delete-button"
          onClick={ this.props.handleDelete } >
        </button>
      </p>
      <p className="card-body"> { this.props.body }</p>
      <p className="card-quality">
      <button
        className="up-button"
        onClick={ this.upQuality.bind(this) } >
      </button>
      <button
        className="down-button"
        onClick={ this.downQuality.bind(this) } >
      </button>
      <p> quality: { msg } </p>
      </p>
      <hr />
    </div>
    )
  }

}
