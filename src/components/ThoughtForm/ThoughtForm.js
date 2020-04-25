import React, { Component } from 'react'
import ThoughtListContext from '../../Context/ThoughtListContext'
import ThoughtApiService from '../../Services/thought-api-service'


export default class ThoughtForm extends Component {
  static contextType = ThoughtListContext

  handleSubmit = ev => {
    ev.preventDefault()
    
    const { thought } = this.context
     const  content   = ev.target.content.value
     const  title   = ev.target.title.value
     const  tag   = ev.target.tag.value
     ev.target.content.value = ''
     ev.target.title.value = ''
     ev.target.tag.value = 'notagenre'
     console.log(content, title, tag)
    ThoughtApiService.postthought(content, title, tag)
    
      .then(this.context.addPost)
      // .then(() => {
      // //   console.log(ev.target.content)
      // //    ev.target.content.value=''
      // //    ev.target.title.value=''
      // //    ev.target.tag.value=''
      // //   console.log({thought})
      // // })
      .catch(this.context.setError)
      
  }

  render() {
    return (
      <form className = "ThoughtForm" onSubmit={this.handleSubmit}>
        <input name='title' required id='title' placeholder='Type the title of your post'></input>< br/>
         <textarea name="content" data-limit="300" required id="content" cols='30' rows='3' placeholder="Type your post"></textarea>< br/>
         <select id="select-genre" id='tag' name='tag'>
                    <option value = "notagenre">Select your genre</option>
                    <option value = "Hip-Hop/Rap">Hip-Hop/Rap</option>
                    <option value = "R&B">R&B</option>
                    <option value = "Pop">Pop</option>
                    <option value = "Rock">Rock</option>
                    <option value = "Country">Country</option>
                    <option value = "Jazz">Jazz</option>
                    <option value = "EDM">EDM</option>
                    <option value = "Blues">Blues</option>
                    <option value = "Classical">Classical</option>
                    <option value = "Funk">Funk</option>
                    <option value = "Reggae">Reggae</option>
                </select>
         <button type="submit">Submit</button>
      </form>
    )
  }
}

