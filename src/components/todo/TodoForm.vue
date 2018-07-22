<template>
  <form class="form-inline" @submit.prevent="addTodo">
    <div class="form-group mr-4">
      <input placeholder="New task" class="form-control" v-model="newTodo">
    </div>
    <button type="submit" class="btn btn-light">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      const newTodo = {
        value: this.newTodo,
        done: false
      }
      this.$emit('addTodo', newTodo)
    }
  }
}
</script>
