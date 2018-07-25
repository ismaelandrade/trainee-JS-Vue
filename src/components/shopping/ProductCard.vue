<template>
  <div class="card product-card">
    <img class="card-img-top" :src="image" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <a href="#" class="btn btn-primary">Add</a>
    </div>
    </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      default: '',
    }
  }
}
</script>


<style scoped>
  .product-card {
    width: 18rem;
  }
</style>

