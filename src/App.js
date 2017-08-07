import React from 'react';
import Form from './components/Form.js';
import IdeaCard from './components/IdeaCard.js';
import Search from './components/Search.js';
import SortButtons from './components/SortButtons.js';
import stylesApp from './styles/App.css';
import stylesButtons from './styles/SortButtons.css';
import stylesForm from './styles/Form.css';
import stylesIdeaCard from './styles/IdeaCard.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      quality: '',
      ideaList: []
    }
  }

  addIdea(e) {
    e.preventDefault();
    this.setState({
      ideaList: [...this.state.ideaList,
        {
          title: this.state.title,
          body: this.state.body,
          quality: 'swill',
        },
      ],

      title: '',
      body: ''
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateQuality() {
    console.log('it works')
    // this.state.ideaList.forEach((idea) => {
    //   if (idea.quality === 'swill') {
    //     idea.quality = 'plausible'
    //   }
    // })
  }

  sortIdea() {
    console.log('sorting...')
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2 className="box-header"><span className="idea-header">Idea</span>Box</h2>
          {
            <Form
              inputValueTitle = { this.state.title }
              inputValueBody = { this.state.body }
              addNewIdea = { this.addIdea.bind(this) }
              onChange = { this.handleChange.bind(this) } />
          }
          {
            <SortButtons
              onClick = { this.sortIdea.bind(this) }/>
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
              quality = { idea.quality }
              onClick = { this.updateQuality.bind(this) } />
            )
          }
        </div>
      </div>
    );
  }
}
