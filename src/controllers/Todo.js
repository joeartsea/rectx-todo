import { Controller } from 'rectx'

export default class TodoController extends Controller {
    state = { todos: [] }

    addTodo = event => {
      if (event.which === 13 && event.target.value) {
        this.setState({
          todos: [
            ...this.state.todos,
            { title: event.target.value, id: Date.now(), completed: false}
          ]
        })
        event.target.value = ''
      }
    }

    toggleTodo = id => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            return Object.assign(todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      })
    }

    deleteTodo = id => {
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      })
    }

    clearCompleted = () => {
      this.setState({
        todos: this.state.todos.filter(todo => !todo.completed)
      })
    }

    itemLeftCount = () => {
      return this.state.todos.filter(todo => !todo.completed).length
    }

    getVisibleTodos = () => {
      switch (this.state.todosFilter) {
        case 'active':
          return this.state.todos.filter(todo => !todo.completed)
        case 'completed':
          return this.state.todos.filter(todo => todo.completed)
        default:
          return this.state.todos
      }
    }

    toggleAll = () => {
      this.setState({
        allCompleted: !this.state.allCompleted,
        todos: this.state.todos.map(todo => Object.assign(todo, {
          completed: !this.state.allCompleted
        }))
      })
    }

    filterTodos = todosFilter => {
      this.setState({ todosFilter })
    }
}
