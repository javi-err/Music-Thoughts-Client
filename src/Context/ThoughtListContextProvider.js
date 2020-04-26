import React, { Component } from 'react'  
import ThoughtListContext from './ThoughtListContext'

class ThoughtListProvider extends Component {
  
  state = {
    thoughtList: [],
    post: [],
    comments: [],
    error: null,
  }

  setThoughtList = thoughtList => {
    this.setState({thoughtList})
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({error: null})
  }

  setPost = post => {
    this.setState({ post })
  }

  addPost = post => {
    console.log(post)
    this.setState({
      thoughtList: [...this.state.thoughtList, post]
    })
  }

  setComment = comment => {
    this.setState({ comment })
  }
  
  addComment = comments => {
      this.setState({
        comments: [...this.state.comments, comments]

      })

  }


  render() {
    const value = {
      thoughtList: this.state.thoughtList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setThoughtList: this.setThoughtList,
      setPost: this.setPost,
      addPost: this.addPost,  
      setComment: this.setComment,
      addComment: this.addComment
    }
    return (
      <ThoughtListContext.Provider value={value}>
        {this.props.children}
      </ThoughtListContext.Provider>
        
    )
  }
}

export default ThoughtListProvider