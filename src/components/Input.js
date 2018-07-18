import React, { Component } from 'react'
import { Listen } from 'rectx'
import TodoController from '../controllers/Todo'

class Input extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <Listen to={[TodoController]}>
        {todo => (
          <React.Fragment>
            <h1>todos</h1>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              defaultValue=""
              onKeyPress={(e) => todo.addTodo(e)}
            />
          </React.Fragment>
        )}
      </Listen>
    )
  }
}

export default Input
