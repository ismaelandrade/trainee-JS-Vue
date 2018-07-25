<template>
  <div class="products-container container">
    <product-card
      title="Product"
      image="https://images-na.ssl-images-amazon.com/images/I/81s7B%2BAls-L._AC_.jpg"
      price="100"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  components: {
    ProductCard,
  }
}
</script>


<style>
  .products-container {
    display: flex;
    flex-flow: row wrap;
    padding-top: 32px;
  }
</style>

