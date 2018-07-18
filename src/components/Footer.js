import React, { Component } from 'react'
import { Listen } from 'rectx'
import Link from './Link'
import TodoController from '../controllers/Todo'

class Footer extends Component {
  render() {
    return (
      <Listen to={[TodoController]}>
        {todo => (
          <footer className="footer">
            <span className="todo-count">
              <strong>{todo.itemLeftCount()}</strong>
              <span> </span>
              <span>items</span>
              <span> left</span>
            </span>
            <ul className="filters">
              <Link filter='all' />
              <Link filter='active' />
              <Link filter='completed' />
            </ul>
            <a className="clear-completed" onClick={todo.clearCompleted}>Clear completed</a>
          </footer>
        )}
      </Listen>
    )
  }
}

export default Footer
