<template>
  <div class="destinationPicker">
    <div v-if="destination">
      Dest: {{destination}}
      <button @click="pickDestination('')">&times;</button>
    </div>
    <CityPicker v-else :player="player" :value="destination" v-on:input="pickDestination" />
    <div v-if="payout">
      Payout: {{payout}}
    </div>
  </div>
</template>

<script>
import { mapProperties } from './bobx';
import CityPicker from './CityPicker.vue';

export default {
  name: 'DestinationPicker',
  props: ['player'],
  computed: {
    ...mapProperties([
      'destination',
      'homeCity'
    ]),
    payout: function(){
      if (this.destination && this.homeCity){
        let payouts = this.$store.state.payouts;
        if (typeof payouts[this.destination] === 'undefined' || typeof payouts[this.destination][this.homeCity] === 'undefined'){
          return 'n/a';
        }
        let number = this.$store.state.payouts[this.destination][this.homeCity];
        let string = number.replace('.',',').replace(/$/,'0');
        return string;
      } else {
        return 0;
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    pickDestination: function(value){
      this.$store.commit('updatePlayer', {
        id         : this.player.id,
        propName   : 'destination',
        propValue  : value
      });
    }
  },
  components: {
    CityPicker
  }
}
</script>

<style scoped>
</style>

