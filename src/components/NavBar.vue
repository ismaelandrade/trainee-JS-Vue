<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <nav-bar-link to="/" label="Todo" />
        <nav-bar-link to="/movies" label="Movies" />
      </ul>
      <shopping-cart-link />
    </div>
  </nav>  
</template>

<script>
import NavBarLink from './NavBarLink'
import ShoppingCartLink from './ShoppingCartLink'

export default {
  components: {
    NavBarLink,
    ShoppingCartLink,
  }
}
</script>
