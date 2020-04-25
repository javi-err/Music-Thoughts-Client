import React, { Component } from 'react'

const ThoughtListContext = React.createContext({
  thoughtList: [],
  post: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setThoughtList: () => {},
  setPost: () => {},
  addPost: () => {}, 
})

export default ThoughtListContext



