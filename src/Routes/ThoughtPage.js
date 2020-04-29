import React, { Component } from 'react';
import ThoughtListContext from '../Context/ThoughtListContext'
import ThoughtApiService from '../Services/thought-api-service'
import ThoughtForm from '../components/ThoughtForm/ThoughtForm'
import CommentForm from '../components/CommentForm/CommentForm'
import thoughtApiService from '../Services/thought-api-service';



export default class ThoughtPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ThoughtListContext

  componentDidMount() {
    const { thoughtsid } = this.props
    this.context.clearError()
    ThoughtApiService.getthought(thoughtsid)
      .then(this.context.addThought)
      .catch(this.context.setError)
    ThoughtApiService.getthoughtComments(thoughtsid)
      .then(this.context.addComment)
      .catch(this.context.setError)
  }

  // componentWillUnmount() {
  //   this.context.clearThought()
  // }


  
  
  


  render() {
    const thought = this.context.thoughtList.find((thought) => {
      return thought.id === this.props.thoughtsid
    })
    let content

    const comments = this.context.comments.filter((comment) => {
      return comment.thought_id === this.props.thoughtsid
    })
    console.log(this.context.comments)
     if (thought) {
        content = (
        <>
            <h2>{thought.title}</h2>
            <p>{thought.tag} />
            {thought.date_created} />
            </p>
            <ThoughtForm /> 
            <ThoughtContent thought={thought}/>
            <ThoughtComments comments={comments}/>
        
          </>
      )
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