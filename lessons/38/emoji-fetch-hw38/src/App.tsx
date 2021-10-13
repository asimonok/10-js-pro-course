import React, {Component} from 'react';
import './App.css';
import EmojiContainer from './components/EmojiContainer'
import Input from './components/Input'

interface Props{}

interface State {
  searchingWord: string
}

class App extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state={
      searchingWord: '',
    }   
  }

  updateSearchingWord = (newSearchingWord: string) => {
    this.setState({
      searchingWord: newSearchingWord,
    })
  }

  render() {

    return (
      <div className="App">
        <Input 
          searchingWord={this.state.searchingWord} 
          onChange={this.updateSearchingWord} 
        />
        <EmojiContainer searchingWord={this.state.searchingWord} />
      </div>
    )

  }
}

export default App;
