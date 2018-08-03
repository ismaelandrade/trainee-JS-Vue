<template>
  <div class="container">
    <h1>Movie List</h1>
    <movies-filter />
    <div class="row">
      <div
        v-for="movie in movieList"
        :key="movie.id"
        class="col-3"
      >
        <movie-card
          v-bind="movie"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MovieCard from './MovieCard'
import MoviesFilter from './MoviesFilter'

export default {
  components: {
    MovieCard,
    MoviesFilter
  },
  mounted () {
    this.fetchMovies()
  },
  computed: {
    ...mapGetters([
      'movieList'
    ])
  },
  methods: {
    ...mapActions([,
      'fetchMovies'
    ])
  }
}
</script>
