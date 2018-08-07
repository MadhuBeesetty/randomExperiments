import React, { Component } from 'react';

 class DisplayResults extends Component {
  render() {
    console.log('i am props',this.props.searchResults);
    return (
      <div>
     <p>hi</p>
     {this.props.searchResults.map((each,index) => {
          return(
            <div key={index} >
              <p>{each.displayUrl}:</p>
              <a href={each.url}>{each.name}</a>
            </div>
          )
        })
      }
      </div>
    )
}
}
 export default DisplayResults;