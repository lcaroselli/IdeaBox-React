import React from 'react';

export default function Form(props) {
  return(
    <form>
      <input
        type="text"
        placeholder="Title"
        value={ props.inputValue }>
      </input>

      <input
        type="textarea"
        placeholder="Body"
        value={ props.inputValue }>
      </input>

      {
        <button
        className="save-button"
        onClick= { props.addNewIdea }>save</button>
      }

    </form>
  )
}
