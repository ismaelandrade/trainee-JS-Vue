<template>
  <li class="nav-item">
    <router-link :to="to" class="nav-link" :class="{ 'active': isActive }">
      {{ label }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
  },
  computed: {
    isActive() {
      return this.$route.path === this.to
    }
  }
}
</script>
