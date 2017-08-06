import React from 'react';

export default function Form(props) {
  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      props.addIdea();
    }
  }

  return(
    <form>
      <input
        type="textarea"
        name="titleinput"
        placeholder="Title"
        value={ props.inputValueTitle }
        onChange={ props.onChange }>
      </input>

      <input
        type="textarea"
        name="bodyinput"
        placeholder="Body"
        value={ props.inputValueBody }
        onChange={ props.onChange }>
      </input>

      {
        <button
        className="save-button"
        onClick={ props.addNewIdea }>save</button>
      }
    </form>
  )
}
