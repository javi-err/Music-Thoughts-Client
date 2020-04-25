import React, { Component } from 'react'
import UserThought from './UserThought'
import PostBox from './PostBox'


export class UserPost extends Component {
  
  render() {

    const userpost = this.props.userthought

    return (
      <div className='user-post-container'>
        <div className='user-post-header'>
          <h2>Post</h2>
          <div className='user-post-text'>
            {userpost}
          </div>
        </div>
        <PostBox />
        
      </div>
    )
  }
}

export default UserPost
