import Vue from 'vue'
import Vuex from 'vuex'
import MovieService from '../services/MovieService';

Vue.use(Vuex)

const store = {
  state: {
    message: 'hello world',
    movies: [],
    genres: [],
    selectedGenre: null
  },

  actions: {
    async fetchMovies (context) {
      const response = await MovieService.getMovies({
        page: 1,
        genre: context.state.selectedGenre
      })
      context.commit('setMovies', response.data.results)
    },
    async fetchGenres (context) {
      const response = await MovieService.getGenres()
      context.commit('setGenres', response.data.genres)
    },
    fetchByGenre(context, genre) {
      context.commit('setSelectedGenre', genre)
      context.dispatch('fetchMovies')
    }
  },

  mutations: {
    setMovies (state, movies) {
      state.movies = movies
    },
    setGenres (state, genres) {
      state.genres = genres
    },
    setSelectedGenre (state, genre) {
      state.selectedGenre = genre
    }
  },

  getters: {
    movieList (state) {
      const imageBasePath = 'http://image.tmdb.org/t/p/w370_and_h556_bestv2'
      return state.movies.map(movie => ({
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        image: `${imageBasePath}${movie.poster_path}`,
        rating: movie.vote_average
      }))
    },
    genreList (state) {
      return state.genres
    },
    selectedGenre (state) {
      const genre = state.genres.filter(genre => genre.id === state.selectedGenre)
      return genre[0] ? genre[0].name : null
    }
  }
}

export default new Vuex.Store(store)
