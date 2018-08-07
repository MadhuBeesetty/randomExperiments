import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
this.state={
  data:'',
}
};

change = (e) => {
  this.setState({[e.target.name]: e.target.value})
};

bingSearch = () => {
  fetch(`http://localhost:3655/search?q=${this.state.data}`)
}

  render() {
    console.log(this.state);
    return (
      <div className="App">
       <input type="text" name="data" onChange={this.change} />
       <input type="submit" onClick={this.bingSearch} />
      </div>
    );
  }
}

export default App;
