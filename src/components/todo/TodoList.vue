<template>
  <ul class="list-group">
    <li v-for="(todo, i) in todos" :key="i" :class="{ 'done-task': todo.done }">
      <input
        type="checkbox"
        @change="toggleTodo(todo)"
        :checked="todo.done"
      >
      {{ todo.value }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleTodo(todo) {
      this.$emit('toggleTodo', todo)
    }
  }
}
</script>

<style scoped>
  .done-task {
    text-decoration: line-through;
  }
</style>
