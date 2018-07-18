import React, { Component } from 'react'
import Input from './Input'
import List from './List'
import Footer from './Footer'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Input />
        <List />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App
