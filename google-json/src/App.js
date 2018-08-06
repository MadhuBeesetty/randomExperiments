import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = "AIzaSyAK6B2xOb4MkJK33Ls1UcNBcY6Q5gyqwWM";
const cx = "017221110988465393220:4e6dhnh4avk";

class App extends Component {
  constructor(){
    super();
this.state={
  search:'',
}
};

change = (e) => {
  this.setState({[e.target.name]: e.target.value})
};

googleSearch = async () => {
  console.log('i came into search');
    const connect_api = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${cx}&q=${this.state.search}`);
    const data = await connect_api.json();
    console.log(data);
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" name="search" onChange={this.change} />
        <input type="submit" onClick={this.googleSearch} />
      </div>
    );
  }
}

export default App;
