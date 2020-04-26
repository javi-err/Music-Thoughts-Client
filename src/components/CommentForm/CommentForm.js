import React, { Component } from 'react'
import ThoughtListContext from '../../Context/ThoughtListContext'
import ThoughtApiService from '../../Services/thought-api-service'
import ThoughtForm from '../ThoughtForm/ThoughtForm'
import ThoughtListItem from '../ThoughtList/ThoughtListItem'



export default class CommentForm extends Component {
  static contextType = ThoughtListContext
  
  handleSubmit = ev => {
    ev.preventDefault()
    
    const { thought } = this.context
    const  text  = ev.target.text.value
    console.log(ThoughtListItem.thoughtid)
    console.log(text)
    
    
    ThoughtApiService.postComment(text, thought.id)
      .then(this.context.addComment)
      // .then(() => {
      
      // })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form className='CommentForm' onSubmit={this.handleSubmit}>
        <div className='text'>
          <textarea
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment..'>
          </textarea>
        </div>
        <button type='submit'>
          Post comment
        </button>
      </form>
    )
  }

}

