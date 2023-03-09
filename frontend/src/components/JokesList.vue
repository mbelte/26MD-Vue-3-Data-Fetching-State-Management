<script setup lang="ts">

</script>

<template>
  <div class="jokes-list flex flex-col">
      <JokesListItem
        v-for="joke in jokes"
        :joke="joke"
        @joke="onClick"
      />
  </div>
</template>

<script lang="ts">
  import type { PropType } from 'vue';
  import type {FetchJokeType, JokeSubmitType} from '../views/HomeView.vue'
  import JokesListItem from './JokesListItem.vue';

  export default {
    components: {
      JokesListItem
    },

    props: {
      jokes: {
        type: Array as PropType<FetchJokeType[]>,
        required: true
      }
    },

    methods: {
      onClick(joke: JokeSubmitType) {
        this.$emit('joke', joke)
      }
    }
  }
</script>