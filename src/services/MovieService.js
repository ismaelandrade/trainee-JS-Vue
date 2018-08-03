import axios from 'axios'
import moment from 'moment'

const url = process.env.VUE_APP_MOVIE_API_URL
const key = process.env.VUE_APP_MOVIE_API_KEY

export default {
  getMovies (queryObj) {
    const query = {
      'api_key': key,
      'sort_by': 'popularity.desc',
      'with_genres': queryObj.genre,
      'page': queryObj.page
    }

    return axios.get(`${url}/discover/movie`, { params: query })
  },
  getGenres () {
    const query = {
      'api_key': key
    }
    return axios.get(`${url}/genre/movie/list`, { params: query })
  }
}