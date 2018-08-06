import React, { Component } from 'react';

 class RenderResults extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
      {this.props.data.map((each,index) => {
          return(
            <div key={index} >
              <p>{each.title}:</p>
              <a href={each.link}>{each.link}</a>
            </div>
          )
        })
      }
      </div>
    )
}
}
 export default RenderResults;
