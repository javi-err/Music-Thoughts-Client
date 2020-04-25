import React, { Component } from 'react'
import ThoughtListContext from '../../Context/ThoughtListContext'
import ThoughtApiService from '../../Services/thought-api-service'



export default class CommentForm extends Component {
  static contextType = ThoughtListContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { thought } = this.context
    const  text  = ev.target.text.value
    console.log(text)
    ThoughtApiService.postComment (thought.id, text)
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

