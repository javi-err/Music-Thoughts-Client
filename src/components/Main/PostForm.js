import React, { Component } from 'react'

export class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      text: '',
    }
  }

  updateAuthor(e) {
    this.setState({
      author: e.target.value
    })
  }

  updateText(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let author = this.state.author;
    let text = this.state.text;
    this.props.addReply(author, text)
        this.setState({
      author: '',
      text: ''
  
    })
  }
  

  render() {

    return (
        <form className="reply-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="reply-form-field">
            <input placeholder="Name" required value={this.state.author} onChange={(e) => {this.updateAuthor(e)}}></input><br />
            <textarea placeholder="Reply" rows="4" required value={this.state.text} onChange={(e) => {this.updateText(e)}}></textarea>
          </div>

          <div className="comment-form-actions">
          <button type="submit">Post reply</button>
          </div>
        </form>
    );
  } 
  
  }


export default PostForm
