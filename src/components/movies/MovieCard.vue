<template>
  <div class="movie-card">
    <img class="card-img-top"
      @error="imageError = true"
      :src="workingImage">
    <div class="movie-card-body">
      <div class="text-container">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ description }}</p>
      </div>
      <movie-card-rating :rating="rating" />
    </div>
  </div>
</template>

<script>
import MovieCardRating from './MovieCardRating'

export default {
  components: {
    MovieCardRating
  },
  data() {
    return {
      imageError: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: 'http://lorempixel.com/370/556'
    },
    rating: {
      type: Number,
      required: true
    }
  },
  computed: {
    workingImage() {
      if (this.imageError) {
        const escapedMovieTitle = this.title.replace(' ', '+')
        return `http://via.placeholder.com/370x556?text=${escapedMovieTitle}`
      }
      return this.image
    }
  }
}
</script>

<style scoped>
  .movie-card {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
    color: white;
    position: relative;
    overflow: hidden;
  }
  .movie-card-saved-icon {
    width: 30px;
    height: 30px;
    top: 10px;
    right: 10px;
    position: absolute
  }
  .movie-card-body {
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.3s, transform 0.3s;
  }
  .movie-card:hover .movie-card-body {
    opacity: 1;
    transform: translateY(0);
  }
  .text-container {
    max-height: 300px;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .card-text {
    font-size: 14px;
  }
  .save-btn {
    float: right;
  }
</style>
