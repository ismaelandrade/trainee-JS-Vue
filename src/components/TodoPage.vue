<template>
  <div>
    <h1>{{ title || 'My to-do list'}}</h1>
    <hr>
    <form class="form-inline" @submit.prevent="addTodo">
      <div class="form-group mr-4">
        <input placeholder="New task" class="form-control" v-model="newTodo">
      </div>
      <button type="submit" class="btn btn-light">Add</button>
    </form>
    <h3>To-do</h3>
    <ul>
      <li v-for="(todo, i) in pendingTodos" :key="i">
        <input type="checkbox" @change="toggleTodo(todo)" :checked="todo.done">
        {{ todo.value }}
      </li>
    </ul>
    <h3>Done</h3>
    <ul>
      <li class="done-task" v-for="(todo, i) in doneTodos" :key="i">
        <input type="checkbox" @change="toggleTodo(todo)" :checked="todo.done">
        {{ todo.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  data() {
    return {
      title: 'Pending tasks',
      newTodo: '',
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
      return this.todos.filter(todo => todo.done);
    },
    pendingTodos() {
      return this.todos.filter(todo => !todo.done);
    }
  },
  methods: {
    toggleTodo(todo) {
      todo.done = !todo.done;      
    },
    addTodo() {
      const newTodo = {
        value: this.newTodo,
        done: false,
      };
      this.todos.push(newTodo);
      this.todo = '';
    }
  }

}
</script>

<style scoped>
  .done-task {
    text-decoration: line-through;
  }
</style>

