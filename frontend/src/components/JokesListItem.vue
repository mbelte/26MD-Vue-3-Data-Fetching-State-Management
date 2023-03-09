<template>
  <div class="jokes-list__item">
    {{ joke.joke }}
    <button 
      class="jokes-list__btn-fav"
      @click="onClick"
      ></button>
  </div>
</template>

<script lang="ts">
  import type { PropType } from 'vue';
  import type { FetchJokeType } from '../views/HomeView.vue'

  export default {
    props: {
      joke: {
        type: Object as PropType<FetchJokeType>,
        required: true
      }
    },

    data() {
      return {
        favoriteJoke: {
          id: this.joke.id,
          joke: this.joke,
          category: this.joke.category
        }
      }
    },

    methods: {
      onClick() {
        this.$emit('joke', this.favoriteJoke)
      }
    }
  }
</script>