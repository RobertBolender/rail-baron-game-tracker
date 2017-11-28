<template>
  <div :class="classObject">
    <ColorPicker
      v-model="playerColor"
      :player="player"
      />
    <input
      v-model="playerName"
      class="playerName"
      />
    <HomePicker
      v-model="homeCity"
      :player="player"
      />
    <span v-if="fromCity">
      From: <span class="fromCity">{{from}}</span>
    </span>
    <DestinationPicker
      v-if="homeCity"
      :player="player"
      :fromCity="fromCity"
      :fromRegion="fromRegion"
      :destinationCity="destinationCity"
      :destinationRegion="destinationRegion"
      />
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
      'fromRegion',
      'destinationCity',
      'destinationRegion',
      'pickARegion',
      'payout'
    ]),
    'from': function() {
      return this.fromCity ? this.fromCity.replace(/_/g,' ') : '';
    },
    'classObject': function() {
      return {
        'player': true,
        'inactive': !this.playerColor
      }
    }
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
  transition: all 300ms;
  &:hover {
    font-weight: bold;
    background: #444;
    border-color: #444;
  }

  &.inactive {
    opacity: 0.5;
    pointer-events: none;
    select {
      pointer-events: all;
    }
  }
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

