import React, { Component } from 'react';

import RenderResults from './components/renderResults';

const API_KEY = "AIzaSyAK6B2xOb4MkJK33Ls1UcNBcY6Q5gyqwWM";
const cx = "017221110988465393220:4e6dhnh4avk";

class App extends Component {
  constructor(){
    super();
this.state={
  search:'',
  data:[],
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
    if(data){this.setState({data: data.items})}
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <input type="text" name="search" onChange={this.change} />
        <input type="submit" onClick={this.googleSearch} />
      <RenderResults data={this.state.data} />
      </div>
    );
  }
}

export default App;
