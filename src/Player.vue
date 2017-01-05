<template>
  <div class="player">
    {{ name }}
    <button @click="decrement">-</button>
    {{ sharedState.count }}
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'player',
  props: ['name'],
  computed: {
    sharedState () {
      return this.$store.state
    }
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style scoped>
.player {
  border: 1px solid #000;
  min-width: 200px;
  min-height: 200px;
  padding: 5px;
  text-align: left;
}
</style>

