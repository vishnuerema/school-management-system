import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Route path='/' component={Home}></Route>
        </div>
      </Router>
    )
  }
}

export default App
