import React from 'react';
import styles from './styles/App.css';
import Form from './components/Form.js'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="box-header"><span className="idea-header">Idea</span>Box</h2>
          <p className="react-header">(with React)</p>
          {
            <Form />
          }
        </div>
      </div>
    );
  }
}
