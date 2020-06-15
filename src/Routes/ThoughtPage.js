import React, { Component } from 'react';
import ThoughtListContext from '../Context/ThoughtListContext'
import ThoughtApiService from '../Services/thought-api-service'
import ThoughtForm from '../components/ThoughtForm/ThoughtForm'
import CommentForm from '../components/CommentForm/CommentForm'
import Header from '../components/Header/Header'
import './ThoughtPage.css'




export default class ThoughtPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ThoughtListContext
  constructor(props) {
    super(props)
    this.state={
      showComments: false,

    }
  }
  




  handleLikes = (event) => {
    event.preventDefault()
    const { thoughtsid } = this.props
    this.context.clearError()
    ThoughtApiService.postLike(thoughtsid)
  }


fetchNewData = () => {
  const { thoughtsid } = this.props
  this.context.clearError()
  ThoughtApiService.getthought(thoughtsid)
    .then(this.context.addThought)
    .catch(this.context.setError)
  ThoughtApiService.getthoughtComments(thoughtsid)
    .then(this.context.addComment)
    .catch(this.context.setError)
}



  componentDidMount() {
    this.fetchNewData();
  }

  componentDidUpdate() {
    if(this.props.comment) {
      this.fetchNewData();
      }
      
  }

  // componentWillUnmount() {
  //   this.context.clearThought()
  // }



  
  


  render() {
    const thought = this.context.thoughtList.find((thought) => {
      return thought.id === this.props.thoughtsid
    })
    let content

    const com = this.context.comments && this.context.comments.flat(); 
    const comments = com.filter((comment) => {
         return comment.thought_id === this.props.thoughtsid
       })


    
     if (thought) {
     
        content = (
          
        <>
            <h2>{thought.title}</h2>
            <p>{thought.tag}</p>
            <p>{thought.date_published}</p>
            <button className ="LikeButton" onClick={(this.handleLikes)}>Like!</button><p>{thought.likes}</p>
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
        

      <div className="thought-container">
        
      <p>Join the disccusion</p>
  
      
      
      <ul className='ThoughtPage__comment-list'>
        {comments.map(comment =>
          <li key={comment.id} className='ThoughtPage__comment'>
            <p className='ThoughtPage__comment-text'>
              {comment.thought_text}
            </p>
            <p className='ThoughtPage__comment-user'>
              {comment.date_created}
            </p>
          </li>
        )}
      </ul>
      </div>
      
    )
    
        }
      
