<template>
  <div class="player">
    <ColorPicker :player="player" v-model="playerColor" />
    <input class="playerName" v-model="playerName">
    <HomePicker :player="player" v-model="homeCity" />
    <DestinationPicker :player="player" v-model="destination" v-if="homeCity" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { mapProperties } from './bobx';
import ColorPicker from './ColorPicker.vue';
import HomePicker from './HomePicker.vue';
import DestinationPicker from './DestinationPicker.vue';

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
    HomePicker,
    DestinationPicker
  }
}
</script>

<style lang="scss" scoped>
.player {
  border: 1px solid #000;
  width: 100%;
  padding: 5px;
  text-align: left;
}
.playerName {
  display: inline-block;
  background: none;
  color: #fff;
  border: none;
  max-width: 75px;
  &:active {
    border: 1px solid black;
  }
}
.colorPicker {
  display: inline-block;
}
</style>

