import React from 'react';

export default class IdeaCard extends React.Component {
  constructor() {
    super();
    this.state = {
      swill: true,
      plausible: false,
      genius: false,
    }
  }

  updateQuality(e) {
    // alert('it works')
  }

  render() {
    var msg;

    if(this.state.swill) {
      msg = 'swill'
    } else if (this.state.plausible) {
      msg = 'plausible'
    } else if (this.state.genius) {
      msg = 'genius'
    }

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
          onClick={ this.updateQuality.bind(this) } >
        </button>
        <button
          className="down-button"
          onClick={ this.updateQuality.bind(this) } >
        </button> quality: { msg }
      </p>
      <hr />
    </div>
    )
  }
}
