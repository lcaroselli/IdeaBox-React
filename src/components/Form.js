import React from 'react';

export default function Form(props) {
  return(
    <form>
      <input
        type="text"
        placeholder="Title"
        value={ props.inputValueTitle }
        onChange = { props.onChange }>
      </input>

      <input
        type="textarea"
        placeholder="Body"
        value={ props.inputValueBody }
        onChange = { props.onChange }>
      </input>

      {
        <button
        className="save-button"
        onClick= { props.addNewIdea }>save</button>
      }

    </form>
  )
}
