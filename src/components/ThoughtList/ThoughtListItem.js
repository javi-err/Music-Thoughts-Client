import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CommentForm from '../CommentForm/CommentForm'
import ThoughtPage from '../../Routes/ThoughtPage'
import './ThoughtListItem.css'

export class ThoughtListItem extends Component {
  render() {

    const { thought } = this.props
    const { comment } = this.props
    
    return (
      <div className='ThoughtListItem'>
        <header className='ThoughtListItem-header'>

        </header>
        <footer className='ThoughtListItem-footer'>
          {/* ThoughtPage renders out the entire page with the posting forms and the content  */}
          <ThoughtPage thoughtsid={thought.id} comment={comment}/>
          {/* Comment Form does the same rendering of the forms and comments but with the comments */}
          <CommentForm thoughtsid={thought.id}/>
        </footer>
      </div>
        
    )
  }


}

function ThoughtTag({ thought }) {
    return(
      <span className='ThoughtListItem-tag'>
       {thought.tag}
      </span>

    )
}



export default ThoughtListItem

