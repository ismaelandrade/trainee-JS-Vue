<template>
  <div class="products-container container">
    <product-card
      v-for="(product, index) in products"
      :key="index"
      :title="product.title"
      :image="product.image"
      :price="product.price"
    >
      <button class="btn btn-primary" @click="addProductInCart(product)">Add</button>
    </product-card>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import * as Products from '../../services/products'

export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters({
      'products': 'getProducts'
    }),
  },
  methods: {
    ...mapActions(['setProducts']),
    ...mapMutations(['addProductInCart'])
  },
  beforeMount() {
    const products = Products.getAll()
    this.setProducts(products)
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

