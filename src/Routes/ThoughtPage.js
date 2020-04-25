import React, { Component } from 'react';
import ThoughtListContext from '../Context/ThoughtListContext'
import ThoughtApiService from '../Services/thought-api-service'
import ThoughtForm from '../components/ThoughtForm/ThoughtForm'
import CommentForm from '../components/CommentForm/CommentForm'



export default class ThoughtPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ThoughtListContext

  componentDidMount() {
    const { thoughtID } = this.props.match.params
    this.context.clearError()
    ThoughtApiService.getthought(thoughtID)
      .then(this.context.setThought)
      .catch(this.context.setError)
    ThoughtApiService.getthoughtComments(thoughtID)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearThought()
  }

  renderThought() {
    const { thought, comments } = this.context
    return <>
      <h2>{thought.title}</h2>
      <p>{thought.tag} />
      {thought.date_created} />
      </p>
      <ThoughtForm /> 
      <ThoughtContent thought={thought} />
      <CommentForm />
      <ThoughtComments comments={comments} />
      
    </>
  }

  render() {
    const { error, thought } = this.context
    let content
    if (error) {
      content = (error.error === `Thought doesn't exist`)
        ? <p className='red'>Thought not found</p>
        : <p className='red'>There was an error</p>
    } else if (!thought.id) {
      content = <div className='loading' />
    } else {
      content = this.renderThought()
    }
    return (
      <div className='ThoughtPage'>
        {content}
      </div>
    )
  }
}


function ThoughtTag({ thought = {tag : ''}}) {
  return (
    <span className='ThoughtPage__tag'>
      {thought.tag}
    </span>
  )
}

function ThoughtContent({ thought }) {
  return (
    <p className='ThoughtPage__content'>
      {thought.content}
    </p>
  )
}

function ThoughtComments({ comments = [] }) {
  return (
    <ul className='ThoughtPage__comment-list'>
      {comments.map(comment =>
        <li key={comment.id} className='ThoughtPage__comment'>
          <p className='ThoughtPage__comment-text'>
            {comment.text}
          </p>
          <p className='ThoughtPage__comment-user'>
            ANONYMOUS
          </p>
        </li>
      )}
    </ul>
  )
}