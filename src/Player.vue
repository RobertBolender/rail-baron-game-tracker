<template>
  <div class="player">
    <ColorPicker :player="player" v-model="playerColor" />
    <input class="playerName" v-model="playerName">
    <HomePicker :player="player" v-model="homeCity" />
    <span v-if="fromCity">
      From: <span class="fromCity">{{fromCity}}</span>
    </span>
    <DestinationPicker :player="player" v-model="destination" :fromCity="fromCity" v-if="homeCity" />
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
      'fromCity',
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
  color: #888;
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

