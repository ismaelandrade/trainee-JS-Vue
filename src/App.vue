<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script>
import TodoPage from './components/todo/TodoPage'
export default {
  name: 'app',
  components: {
    TodoPage
  }
}
</script>
<style>

</style>
