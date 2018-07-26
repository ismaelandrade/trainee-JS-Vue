<template>
  <div class="shopping-cart-link">
    <span class="counter">{{count}}</span>
    <router-link to="/shopping-cart">
      <i class="material-icons cart-icon">shopping_cart</i>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['count']
}
</script>

<style scoped>
  .shopping-cart-link {
    padding-top: 8px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .counter {
    background: #C62828;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    line-height: 10px;
    padding: 4px;
    box-sizing: border-box;
    border-radius: 50%;
    position: absolute;
    left: -8px;
    top: -4px;
  }

  .cart-icon {
    font-size: 32px;
    color: #222;
  }
</style>
