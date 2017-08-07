import React from 'react';

export default function IdeaCard (props) {
  return (
    <div className="idea-card">
      <p className="card-title">{ props.title } <button className="delete-button"></button></p>
      <p className="card-body"> { props.body }</p>
      <p className="card-quality">
        <button
          className="up-button"
          onClick={ props.onClick } >
        </button>
        <button
          className="down-button"
          onClick={ props.onClick } >
        </button> quality: { props.quality }
      </p>
      <hr />
    </div>
  )
}
