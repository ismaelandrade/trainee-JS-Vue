<template>
  <div class="dropdown">
    <button class="btn btn-light dropdown-toggle"
      type="button"
      @click="open=!open"
    >
      {{ filterLabel }}
    </button>
    <div class="dropdown-menu" :class="{ 'show': open }" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item"
        v-for="genre in genreList"
        :key="genre.id"
        @click.prevent="onFilterClick(genre.id)"
      >
        {{ genre.name }}
      </a>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      open: false
    }
  },
  mounted () {
    this.fetchGenres()
  },
  computed: {
    filterLabel () {
      return this.selectedGenre || 'Viewing all genres'
    },
    ...mapGetters([
      'genreList',
      'selectedGenre'
    ])
  },
  methods: {
    ...mapActions([,
      'fetchGenres',
      'fetchByGenre'
    ]),
    onFilterClick (genre) {
      this.fetchByGenre(genre)
      this.open = !this.open
    }
  }
}
</script>
