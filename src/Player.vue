<template>
  <div class="player">
    <input class="playerName" v-model="playerName">
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['player'],
  computed: {
    playerName: {
      get () {
        return this.player.playerName;
      },
      set (value) {
        this.$store.commit('namePlayer', {
          id         : this.player.id,
          playerName : value
        });
      }
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

