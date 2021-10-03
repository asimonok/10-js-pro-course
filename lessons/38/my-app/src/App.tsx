import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import EmojiContainer from './components/EmojiContainer';

interface Props {}

interface State {
  searchString: string;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchString: '',
    };
  }

  handleChange = (searchString: string) => {
    this.setState({
      searchString,
    });
  };

  render() {
    const { searchString } = this.state;
    return (
      <div className="App">
        <Input placeholder="Search Emoji" onChange={this.handleChange} />
        <EmojiContainer searchString={searchString} />
      </div>
    );
  }
}

export default App;
