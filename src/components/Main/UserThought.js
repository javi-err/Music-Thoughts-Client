import React, { Component } from 'react'
import ValidationError from './ValidationError'


export class UserThought extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userthought: {
        value: " ",
        touched: false,
      },

      selectgenre: {
        value: " ",
        touched: true,
      },
    }
  }

    
  updateThought(thought) {
    this.setState({ userthought: { value: thought, touched: true } });

  }

  updateGenre(genre) {
    this.setState({selectgenre: {value: genre, touched: true}})
  }

  handleSubmit(event) {
    event.preventDefault();
    const {userthought, selectgenre} = this.state;
    console.log("User Thought: ", userthought.value)
    console.log("Selected Genre: ", selectgenre.value)
    

  }

  validateThought() {
    const thought = this.state.userthought.value;
    const thoughtTouch = this.state.userthought.touched
  if(thought.length === 0 || thoughtTouch === false) /* not working */ {
      return "Insert your thought in the textbox"
    }
    else if (thought.length <= 10) {
      return "Thought must be 10 characters or more"
    }
  }

  validateGenre() {
    const genre = this.state.selectgenre.value;
    if(genre.value === 'notagenre') {
      
    
    }
  }
    render() {
      const thoughtError = this.validateThought();
      const genreError = this.validateGenre();

      return (
        
          <div className="thought-form-container">
            <form id="thought-input-form" onSubmit={event => this.handleSubmit(event)}>
                <textarea name="thought-text" data-limit="300" onChange={event => this.updateThought(event.target.value)}></textarea>< br/>
                {this.state.userthought.touched && <ValidationError message={thoughtError} />}
                <select id="select-genre" onChange={event => this.updateGenre(event.target.value)}>
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
                <ValidationError message={genreError} />
              <input type="submit" className="post-submit"></input>
             
            </form>

           
          </div>
        
      );
    }
  }



export default UserThought


