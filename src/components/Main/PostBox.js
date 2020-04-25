import React, { Component } from 'react'
import PostForm from './PostForm'
import Comment from './Comment'

export class PostBox extends Component {
  constructor(props) {
    super(props)
      this.state = {
        showComments: false,
        comments: [
          {id: 1, author: "Author 1", text: "Woah"},
          {id: 2, author: "Author 2", text: "There"},
          {id: 3, author: "Author 3", text: "Boy"}
        ]
      }

    }

    addReply(author, text){
      const reply = {
        id: this.state.comments.length + 1,
        author,
        text
      };
      console.log(reply);
      this.setState({comments: this.state.comments.concat([reply])})
    
    }

    handleClick() {
      this.setState({
        showComments : !this.state.showComments
      })
    }

    getReplies() {    
      return this.state.comments.map((reply) => { 
        return (
          <Comment 
            author={reply.author} 
            text={reply.text} 
            key={reply.id} />
        ); 
      });
    }

    getReplyTitle(replyCount) {
      if(replyCount === 0) {
        return 'Be the first reply!'
      }
      else if(replyCount === 1) {
        return '1 Comment'
      }
      else {
        return  `${replyCount} comments`
      }
    }

  render() { 
    const replies = this.getReplies()
    let replyNodes
    let buttonText = "Show Replies"

    if(this.state.showComments){
      buttonText = "Hide Replies"
      replyNodes = <div className = "comment-list">
        {replies}
      </div>
    }

    return (
      <div className='postBox'>
        <h2>Have something to say?</h2>
        <PostForm addReply={this.addReply.bind(this)}/>
        <button id="show-replies" onClick={this.handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3>Replies</h3>
        <h4 className ='reply-count'>
          {this.getReplyTitle(replies.length)}
        </h4>
        {replyNodes}
      </div>
    )
  }


}

export default PostBox
