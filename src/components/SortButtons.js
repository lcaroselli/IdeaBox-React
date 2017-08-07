import React from 'react';

export default function SortButtons (props) {
  return (
    <div>
    <p className="sort-text">Sort by Quality of Idea</p>
    <button
      className="sort-button"
      onClick={ props.onClick }>
      swill</button>

    <button
      className="sort-button"
      onClick={ props.onClick }>
      plausible</button>

    <button
      className="sort-button"
      onClick={ props.onClick }>
      genius</button>
    </div>
  )
}
