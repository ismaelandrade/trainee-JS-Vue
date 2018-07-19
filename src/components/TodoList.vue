<template>
  <div>
    <div class="col-sm-6">
      <h3>To-do</h3>
      <ul>
        <li v-for="todo in pendingTodos" :key="todo.id">
          <input type="checkbox" @change="toggleTodo(todo.id)" :checked="todo.done">
          {{ todo.value }}
        </li>
      </ul>
    </div>
    <div class="col-sm-6">
      <h3>Done</h3>
      <ul>
        <li v-for="(todo, i) in doneTodos" :key="i">
          <input type="checkbox" @change="toggleTodo(todo.id)" :checked="todo.done">
          {{ todo.value }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'todo-list',
  data() {
    return {
      todos: [
        {
          id: 1,
          done: false,
          value: 'Walk the dog',
        },
        {
          id: 2,
          done: false,
          value: 'Wash the dishes',
        },
        {
          id: 3,
          done: false,
          value: 'Do the groceries'
        }        
      ]
    }
  },
  computed: {
    doneTodos() {
      return this.todos.filter(todo => todo.done);
    },
    pendingTodos() {
      return this.todos.filter(todo => !todo.done);
    }
  },
  methods: {
    toggleTodo(todoId) {
      const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
      const todo = this.todos[todoIndex];
      todo.done = !todo.done;
      
      this.todos.splice(todoIndex, 1, todo);
    }
  }

}
</script>
<style>

</style>
