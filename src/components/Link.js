import React, { Component } from 'react'
import { Listen } from 'rectx'
import TodoController from '../controllers/Todo'

class Link extends Component {
  shouldComponentUpdate(ownProps, ownState) {
    return ownProps.todosFilter !== this.props.todosFilter
  }

  render() {
    const { filter, todosFilter } = this.props
    return (
      <Listen to={[TodoController]}>
        {todo => (
          <li>
            <a
              href={'#' + (filter === 'all' ? '' : filter)}
              className={filter === todosFilter ? 'selected' : ''}
              onClick={() => todo.filterTodos(filter)}
            >
              {filter}
            </a>
          </li>
        )}
      </Listen>
    )
  }
}

export default Link
