<template>
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
        const { _id } = joke
        axios.delete('http://localhost:3004/joke/' + _id, )
      }
    }
  }
</script>