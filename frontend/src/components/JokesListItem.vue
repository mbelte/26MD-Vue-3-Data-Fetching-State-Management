<template>
  <div class="jokes-list__item">
    {{ joke.joke }}
    <button 
      class="jokes-list__btn-fav"
      :title="label"
      @click="onClick"
      ></button>
  </div>
</template>

<script lang="ts">
  import type { PropType } from 'vue';
  import type { FetchJokeType } from '../views/HomeView.vue'
  import type { FetchJoke } from '@/views/FavoritesView.vue';

  export default {
    props: {
      joke: {
        type: Object as PropType<FetchJokeType | FetchJoke[]>,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        favoriteJoke: {
          apiId: this.joke.id,
          joke: this.joke.joke,
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