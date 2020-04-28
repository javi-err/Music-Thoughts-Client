import React, { Component } from 'react'

const ThoughtListContext = React.createContext({
  thoughtList: [],
  thought: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setThoughtList: () => {},
  setThought: () => {},
  setPost: () => {},
  addPost: () => {}, 
})

export default ThoughtListContext



