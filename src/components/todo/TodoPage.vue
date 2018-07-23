<template>
  <div class="container">
    <h1>{{ title || 'My to-do list'}}</h1>
    <hr>
    <div>
      <todo-form @addTodo="addTodo" />
      <h3>To-do</h3>
      <todo-list :todos="pendingTodos" @toggleTodo="toggleTodo" />
      <h3>Done</h3>
      <todo-list :todos="doneTodos"  @toggleTodo="toggleTodo" />
    </div>
  </div>
</template>

<script>
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default {
  components: {
    TodoForm,
    TodoList
  },
  data() {
    return {
      title: 'Pending tasks',
      todos: [
        {
          done: false,
          value: 'Walk the dog',
        },
        {
          done: false,
          value: 'Wash the dishes',
        },
        {
          done: false,
          value: 'Do the groceries'
        }        
      ]
    }
  },
  computed: {
    doneTodos() {
      return this.todos.filter(todo => todo.done)
    },
    pendingTodos() {
      return this.todos.filter(todo => !todo.done)
    }
  },
  methods: {
    toggleTodo(todo) {
      todo.done = !todo.done
    },
    addTodo(newTodo) {
      this.todos.push(newTodo)
    }
  }
}
</script>
