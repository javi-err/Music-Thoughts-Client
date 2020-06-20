import React, { Component } from 'react'  
import ThoughtListContext from './ThoughtListContext'

class ThoughtListProvider extends Component {
  
  state = {
    thoughtList: [],
    thought: [],
    comments: [],
    error: null,
  }

  setThoughtList = thoughtList => {
    this.setState({thoughtList})
  }

  addThought = thought => {
    this.setState({
      thoughtList: [...this.state.thoughtList, thought]
    })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({error: null})
  }

  setPost = thought => {
    this.setState({ thought })
  }

  addPost = post => {
  
    this.setState({
      thoughtList: [...this.state.thoughtList, post]
    })
  }

  setComment = comment => {
    this.setState({ comment })
  }
  
  addComment = comments => {
    this.setState({
      comments: [...this.state.comments, comments],
      comment: null,
    })

}





  render() {
    const value = {
      comments: this.state.comments,
      thoughtList: this.state.thoughtList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setThoughtList: this.setThoughtList,
      setPost: this.setPost,
      addPost: this.addPost,  
      setComment: this.setComment,
      addComment: this.addComment,
      comment: this.state.comment 
    }
    return (
      <ThoughtListContext.Provider value={value}>
        {this.props.children}
      </ThoughtListContext.Provider>
        
    )
  }
}

export default ThoughtListProvider