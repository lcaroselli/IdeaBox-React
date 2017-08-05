import React from 'react';
import stylesApp from './styles/App.css';
import stylesForm from './styles/Form.css';
import stylesIdeaCard from './styles/IdeaCard.css'; //may not need to import here?
import Form from './components/Form.js';
import Search from './components/Search.js';
import IdeaCard from './components/IdeaCard.js';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      newIdea: '',
      ideaList: []
    }
  }

  addIdea(e) {
    e.preventDefault()
    this.setState({
      newIdea: 'New',
      ideaList: [...this.state.ideaList, {
        title: this.state.newIdea,
        body: this.state.newIdea,
        quality: this.state.newIdea
        }]
    })
  }

  // handleChange(e) {
  //   this.setState({
  //     newIdea: e.target.value
  //     })
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="box-header"><span className="idea-header">Idea</span>Box</h2>
          {
            <Form
            inputValue = { this.state.newIdea }
            addNewIdea = { this.addIdea.bind(this) } />
          }
        </div>
        <div className="App-list">
        {
          <Search />
        }
        {
          this.state.ideaList.map(( idea, index ) =>
            <IdeaCard
              title = { idea.title}
              body = { idea.body }
              quality = { idea.quality } />
          )
        }
        </div>
      </div>
    );
  }
}
