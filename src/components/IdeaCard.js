import React from 'react';

export default function IdeaCard (props) {
  const { title, body, quality } = props;

  return (
    <div className="idea-card">
      <p className="card-title">{ props.title }</p>
      <p className="card-body"> { props.body }</p>
      <button className="up-button"><img src="" alt="Up vote button" /></button>
      <button className="down-button"><img src="" alt="Down vote button" /></button>
      <p className="card-quality"> quality: { props.quality }</p>
      <button className="delete-button"><img src="" alt="Delete idea button" /></button>
      <hr />
    </div>
  )
}
