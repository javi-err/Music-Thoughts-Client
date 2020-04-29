import React, { Component } from 'react'
import ThoughtListContext from '../../Context/ThoughtListContext'
import ThoughtApiService from '../../Services/thought-api-service'
import ThoughtForm from '../ThoughtForm/ThoughtForm'
import ThoughtListItem from '../ThoughtList/ThoughtListItem'



export default class CommentForm extends Component {
  static contextType = ThoughtListContext
  constructor(props){
    super(props)
    this.state = {
      value: '',
    }
  }
  
  updateComment = ({target}) => {
    const {value: text} = target
    this.setState({
      text
    })
    console.log(this.state.text)
  }
  handleSubmit = ev => {
    ev.preventDefault()
    
    const { thoughtid } = this.props
    const  text  = this.state.text
    console.log(thoughtid)
    console.log(text)
    
    ThoughtApiService.postComment(thoughtid, text)
      .then(this.context.setComment)
      // .then(() => {
      
      // })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form className='CommentForm' onSubmit={this.handleSubmit}>
        <div className='text'>
          <textarea onChange={event=>this.updateComment(event)}
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


