import React, { Component } from 'react'

export class BackToTop extends Component {

  handleBackToTopButton = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  }
 

 
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleBackToTopButton}>
        Top &uarr;
       {/* Replace with actual up arrow logo later */}  
        </button>
      </div>
    )
  }
}

export default BackToTop
