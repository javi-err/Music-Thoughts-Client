import React, { Component } from 'react'

export class Comment extends Component {

  render() {
    return(
      <div className="reply">
        <p className="reply-author">{this.props.author}</p>
        <p className="reply-text">{this.props.text}</p>
      </div>
    );
  }
  
}



export default Comment
