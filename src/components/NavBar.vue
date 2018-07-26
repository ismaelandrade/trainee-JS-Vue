<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <nav-bar-link to="/" label="Todo" />
        <nav-bar-link to="/movies" label="Movies" />
      </ul>
      <shopping-cart-link :count="countProducts"/>
    </div>
  </nav>  
</template>

<script>
import NavBarLink from './NavBarLink'
import ShoppingCartLink from './ShoppingCartLink'
import { mapState } from 'vuex'

export default {
  components: {
    NavBarLink,
    ShoppingCartLink,
  },
  computed: {
    ...mapState(['productsInCart']),
    countProducts () {
      return this.productsInCart.length
    }
  }
}
</script>
