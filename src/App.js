import React from 'react';
import stylesApp from './styles/App.css';
import stylesButtons from './styles/SortButtons.css';
import stylesForm from './styles/Form.css';
import stylesIdeaCard from './styles/IdeaCard.css';
import Form from './components/Form.js';
import IdeaCard from './components/IdeaCard.js';
import Search from './components/Search.js';
import SortButtons from './components/SortButtons.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newIdea: {
        title: '',
        body: '',
        quality: 'swill'
      },
      ideaList: []
    }
  }

  addIdea(e) {
    e.preventDefault();
    this.setState({
      newIdea: {
        title: '',
        body: '',
        quality: 'swill'
      },

      ideaList: [...this.state.ideaList,
        { title: this.state.newIdea.titleinput,
          body: this.state.newIdea.bodyinput,
          quality: 'swill' },
      ]
    })
  }

  handleChange(e) {
    this.setState({
      newIdea: {
      [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="box-header"><span className="idea-header">Idea</span>Box</h2>
          {
            <Form
              inputValueTitle = { this.state.newIdea.title }
              inputValueBody = { this.state.newIdea.body }
              addNewIdea = { this.addIdea.bind(this) }
              onChange = { this.handleChange.bind(this) } />
          }
          {
            <SortButtons />
          }
        </div>
        <div className="App-list">
        {
          <Search />
        }
        {
          this.state.ideaList.map(( idea, index ) =>
            <IdeaCard
              title = { idea.title }
              body = { idea.body }
              quality = { idea.quality } />
          )
        }
        </div>
      </div>
    );
  }
}
