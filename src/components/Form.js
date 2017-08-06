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
        type="text"
        name="title"
        placeholder="Title"
        value={ props.inputValueTitle }
        onChange={ props.onChange }>
      </input>

      <input
        type="text"
        name="body"
        placeholder="Body"
        value={ props.inputValueBody }
        onChange={ props.onChange }>
      </input>

        <button
        className="save-button"
        disabled = { !props.inputValueTitle || !props.inputValueBody }
        onClick={ props.addNewIdea }>save</button>

    </form>
  )
}
