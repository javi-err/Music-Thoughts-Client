import React, { Component } from 'react'
import Comment from './Comment'
import data  from './Post'



export class PostList extends Component {
  render() {
    const data = [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
    ];
    
    const commentNodes = this.props.data.map(function(comment) {
      
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
};

export default PostList
