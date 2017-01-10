<template>
  <div class="player">
    <ColorPicker :player="player" v-model="playerColor" />
    <input class="playerName" v-model="playerName">
    <div v-if="homeCity">
      Home: {{homeCity}}
      <div v-if="destination">
        {{destination}}
        {{payout}}
      </div>
      <div v-else>No destination</div>
    </div>
    <div v-else>
      <HomePicker :player="player" v-model="homeCity" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapProperties } from './bobx';
import ColorPicker from './ColorPicker.vue';
import HomePicker from './HomePicker.vue';

export default {
  props: ['player'],
  computed: {
    ...mapProperties([
      'playerName',
      'playerColor',
      'homeCity',
      'destination',
      'payout'
    ])
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  },
  components: {
    ColorPicker,
    HomePicker
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
  display: inline-block;
  background: none;
  border: 1px solid #ddd;
  max-width: 100px;
  &:active {
    border: 1px solid black;
  }
}
.colorPicker {
  display: inline-block;
}
</style>

