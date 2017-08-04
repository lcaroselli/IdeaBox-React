import React from 'react';
import stylesApp from './styles/App.css';
import stylesForm from './styles/Form.css';
import stylesIdeaCard from './styles/IdeaCard.css'; //may not need to import here?
import Form from './components/Form.js';
import Search from './components/Search.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="box-header"><span className="idea-header">Idea</span>Box</h2>
          {
            <Form />
          }
        </div>
        <div className="App-list">
        {
          <Search />
        }
        </div>
      </div>
    );
  }
}
