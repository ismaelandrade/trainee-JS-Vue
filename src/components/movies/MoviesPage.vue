<template>
  <div class="container">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    message: state => state.message
  })
}
</script>
