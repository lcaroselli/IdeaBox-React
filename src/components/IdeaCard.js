import React from 'react';

export default function IdeaCard (props) {
  return (
    <div className="idea-card">
      <p className="card-title">{ props.title }</p>
      <p className="card-body"> { props.body }</p>
      <p className="card-quality"> quality: { props.quality }</p>
      <button className="up-button"></button>
      <button className="down-button"></button>
      <button className="delete-button"></button>
      <hr />
    </div>
  )
}
