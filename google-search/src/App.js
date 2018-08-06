import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  this.onChange = this.onChange.bind(this);
  this.onClick = this.onClick.bind(this);
  };

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onClick() {
    console.log('hi');
    fetch(`http://localhost:3655/search?q=${this.state.data}`)
    console.log('done and dusted');
}

componentDidMount () {
  const script = document.createElement("script"); 
 script.src = "https://cse.google.com/cse.js?cx="+"017221110988465393220:4e6dhnh4avk"; 
 script.async = true; 
 document.body.appendChild(script); 
 }

  render() {
    console.log(this.state);
    return (
      <div>
        <div ref={el => (this.instance = el)} />
        <form method = "get" title = "Search Form" action="https://cse.google.com/cse/publicurl">
          <div>
           <input type="text" id="q" name="q" title="Search this site" alt="Search Text" maxlength="256" />
           <input type="hidden" id="cx" name="cx" value="017221110988465393220:4e6dhnh4avk" />
           <input type="image" id="searchSubmit" name="submit" src="https://www.flaticon.com/free-icon/active-search-symbol_34148" alt="Go" title="Submit Search Query" />
         </div>
        </form>
      </div>
    );
  }
}

export default App;
