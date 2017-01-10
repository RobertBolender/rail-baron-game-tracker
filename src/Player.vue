<template>
  <div class="player">
    <input class="playerName" v-model="playerName">
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapProperties } from './bobx';

export default {
  props: ['player'],
  computed: {
    ...mapProperties([
      'playerName'
    ])
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style lang="scss" scoped>
.player {
  border: 1px solid #000;
  min-width: 200px;
  min-height: 200px;
  padding: 5px;
  text-align: left;
}
.playerName {
  display: block;
  background: none;
  border: 1px solid #ddd;
  &:active {
    border: 1px solid black;
  }
}
</style>

