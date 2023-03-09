<template>
  <h1 class="text-center font-bold text-2xl py-4">
    List of programming jokes
  </h1>
  <JokesList
    :jokes="jokes"
    :label="'Add to favorites'"
    @joke="submitFavorite"
  />
</template>

<script lang="ts">
  import JokesList from '@/components/JokesList.vue';
  import axios from 'axios';

  type FetchFlagsType = {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
  }

  type FetchType = {
    error: boolean;
    amount: number;
    jokes: FetchJokeType[];
  }

  export type FetchJokeType = {
    category: string;
    type: string;
    joke: string;
    flags: FetchFlagsType[];
    safe: boolean;
    id: number;
    lang: string;
  }

  export type JokeSubmitType = {
    id: number;
    joke: string;
    category: string;
  }

  export default {
    components: {
      JokesList
    },

    data () {
      return {
        jokes: [] as FetchJokeType[]
      }
    },

    mounted() {
      this.fetchJokes()
    },

    methods: {
      fetchJokes() {
        axios<FetchType>('https://v2.jokeapi.dev/joke/Programming?type=single&amount=10')
          .then(({ data }) => this.jokes = data.jokes)
          .catch(error => console.log(error))
      },

      submitFavorite(joke: JokeSubmitType) {
        axios.post('http://localhost:3004/joke', joke)
      }
    }
  }
</script>