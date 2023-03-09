<template>
  <h1 class="text-center font-bold text-2xl py-4">
    List of favorite jokes
  </h1>
  <JokesList
    :jokes="jokes"
    :label="'Remove from favorites'"
    @joke="removeFavorite"
  />
</template>

<script lang="ts">
  import JokesList from '@/components/JokesList.vue';
  import axios from 'axios';

  export type FetchJoke = {
    id?: number;
    _id: string;
    apiId: number;
    joke: string;
    category: string;
  }

  export default {
    components: {
      JokesList
    },

    data () {
      return {
        jokes: [] as FetchJoke[]
      }
    },

    mounted() {
      this.fetchJokes()
    },

    methods: {
      fetchJokes() {
        axios<FetchJoke[]>('http://localhost:3004/joke')
          .then(({ data }) => this.jokes = data)
          .catch(error => console.log(error))
      },

      removeFavorite(joke: FetchJoke) {
        axios
          .delete('http://localhost:3004/joke/' + joke._id, )
          .then(({ data }) => {
            if (data === 'success') {
              this.fetchJokes()
            }
          })
      }
    }
  }
</script>