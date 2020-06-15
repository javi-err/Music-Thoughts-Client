import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div className ="description">
                <h1>Music Thoughts</h1>
            <div className ="description-text">
                <p>Welcome to Music Thoughts! This is an app that lets you post your opinion anonymously on a music genre
                    and have other users like or comment on your post. The main point of Music Thoughts
                    is to create discussion without feeling worried about being judged. </p>

                <p>To get started click Enter, then type out your title of your post and the 
                    content in the textbox, then select a genre from the dropdown below and click submit!
                </p>
            </div>

            <Link to='/thoughts'> <button>Enter!</button></Link>
            </div>




        )
    }
}


