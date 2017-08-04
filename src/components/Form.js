import React from 'react';

export default function Form(props) {
  return(
    <form>
      <input type="text" placeholder="Title"></input>
      <input type="textarea" placeholder="Body"></input>
      <button className="save-button">save</button>
    </form>
  )
}
