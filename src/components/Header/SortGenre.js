import React, { Component } from 'react'

export class SortGenre extends Component {
  constructor(){
    super()
    this.state = {
      genre: [
        {
          id: 0,
          title: 'Hip-Hop/Rap',
          selected: false,
          key: 'genre'
        },

        {
          id: 0,
          title: 'R&B',
          selected: false,
          key: 'genre'
        },

        {
          id: 0,
          title: 'Pop',
          selected: false,
          key: 'genre'
        },
        
        {
          id: 0,
          title: 'Rock',
          selected: false,
          key: 'genre'
        },

        {
          id: 0,
          title: 'Country',
          selected: false,
          key: 'genre'
        },

        {
          id: 0,
          title: 'Jazz',
          selected: false,
          key: 'genre'
        },

        {
          id: 0,
          title: 'EDM',
          selected: false,
          key: 'genre'
        },

        {
          id: 0,
          title: 'Blues',
          selected: false,
          key: 'genre'
        },

        {
          id: 0,
          title: 'Classical',
          selected: false,
          key: 'genre'
        },

        {
          id: 0,
          title: 'Funk',
          selected: false,
          key: 'genre'
        },

        {
          id: 0,
          title: 'Reggae',
          selected: false,
          key: 'genre'
        }
      ]
    }
  }
  
  render() {
    return (
      <div>
        <div className="dropdown-container">
          <div className="dropdown-title">Select a genre to sort by</div>
          <ul className="genre-list">
            <li className="genre-list-item">Hip-Hop/Rap</li>
            <li className="genre-list-item">R&B</li>
            <li className="genre-list-item">Pop</li>
            <li className="genre-list-item">Rock</li>
            <li className="genre-list-item">Country</li>
            <li className="genre-list-item">Jazz</li>
            <li className="genre-list-item">EDM</li>
            <li className="genre-list-item">Blues</li> 
            <li className="genre-list-item">Classical</li>
            <li className="genre-list-item">Funk</li> 
            <li className="genre-list-item">Reggae</li>   
          </ul>
        </div>
      </div>
    )
  }
}

export default SortGenre
