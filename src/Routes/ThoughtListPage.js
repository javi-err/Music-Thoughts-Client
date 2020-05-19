import React, { Component } from 'react'
import { useState } from 'react'
import ThoughtListContext from '../Context/ThoughtListContext'
import ThoughtApiService from '../Services/thought-api-service'
import ThoughtListItem from '../components/ThoughtList/ThoughtListItem'
import ThoughtForm from '../components/ThoughtForm/ThoughtForm'


export class ThoughtListPage extends Component {
  static contextType = ThoughtListContext


  
  

  componentDidMount() {
    this.context.clearError()
    ThoughtApiService.getthoughts()
    .then(this.context.setThoughtList)
    .catch(this.context.setError)
  }

  renderThoughts() {
    const { thoughtList = [] } = this.context
    return thoughtList.map(thought => 
     
      <ThoughtListItem
      key={thought.id}
      thought={thought}
      comment={this.context.comment}
      />
    )
    
  }

  render() {
    const { error } = this.context
    return (
      
      <div>
        <ThoughtForm />
        {error ?
        <p className='red'>There was an error </p>
        : this.renderThoughts()}
      </div>
    )
  }
}

export default ThoughtListPage
