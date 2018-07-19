<template>
  <div id="app" class="container">
    <todo-list />
  </div>
</template>

<script>
import TodoList from './components/TodoList';
export default {
  name: 'app',
  components: {
    TodoList,
  },
}
</script>
<style>

</style>
