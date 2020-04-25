import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CommentForm from '../CommentForm/CommentForm'

export class ThoughtListItem extends Component {
  render() {

    const { thought } = this.props
    return (
      <div className='ThoughtListItem'>
        <header className='ThoughtListItem-header'>
          <h2 className='ThoughtListItem_heading'>
            {thought.title}
          </h2>
          <ThoughtDate thought={thought} />
        </header>
        <footer className='ThoughtListItem-footer'>
          <ThoughtAuthor thought={thought} />< br/>
          <ThoughtTag thought={thought} />< br/>
          <ThoughtContent thought={thought}/>
          <CommentForm />
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

function ThoughtDate({ thought }) {
  return(
    <span className='ThoughtListItem-date'>
      {thought.date_published}
    </span>
  )
}

function ThoughtAuthor({ thought }) {
  return (
    <span className='ThoughtListItem-author'>
      ANONYMOUS
    </span>
  )
}

function ThoughtContent( {thought}) {
  return ( 
    <span className='ThoughtListItem-content'>
      {thought.content}
    </span>
  )
}

export default ThoughtListItem

