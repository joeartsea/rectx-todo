import React, { Component } from 'react'
import { Listen } from 'rectx'
import TodoController from '../controllers/Todo'

class List extends Component {
  render () {
    const { getVisibleTodos, deleteTodo, toggleTodo, toggleAll } = this.props
    return (
      <Listen to={[TodoController]}>
        {todo => (
          <section className="main">
            <input
              className="toggle-all"
              type="checkbox"
              onClick={todo.toggleAll}
            />
              Toggle all
            <ul className="todo-list">
              {
                todo.getVisibleTodos().map(t =>
                  <li
                    key={t.id}
                    style={{textDecoration: t.completed ? 'line-through' : 'none'}}
                    className={t.completed ? 'completed' : ''}
                  >
                    <div className="view">
                      <input
                        className="toggle"
                        type="checkbox"
                        checked={t.completed}
                        onChange={() => todo.toggleTodo(t.id)}
                      />
                      <label>{t.title}</label>
                      <button
                        className="destroy"
                        onClick={() => todo.deleteTodo(t.id)}
                      >
                        delete
                      </button>
                    </div>
                  </li>
                )
              }
            </ul>
          </section>
        )}
      </Listen>
    )
  }
}

export default List
