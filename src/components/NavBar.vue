<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <nav-bar-link to="/" label="Todo" />
        <nav-bar-link to="/movies" label="Movies" />
      </ul>
    </div>
  </nav>  
</template>

<script>
import NavBarLink from './NavBarLink'
export default {
  components: {
    NavBarLink
  }
}
</script>
