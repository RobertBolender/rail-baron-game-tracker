<template>
  <div class="destinationPicker">
    <template v-if="destination">
      To: <span class="destination">{{destination}}</span>
      For: <span class="payout" v-if="payout">${{payout}}</span>
      <button @click="pickDestination('')">&times;</button>
    </template>
    <CityPicker :player="player" :value="destination" v-on:input="pickDestination" />
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
      'fromCity',
      'homeCity'
    ]),
    payout: function(){
      if (this.destination && this.fromCity){
        let payouts = this.$root.$data.payouts;
        if (typeof payouts[this.destination] === 'undefined' || typeof payouts[this.destination][this.fromCity] === 'undefined'){
          return 'n/a';
        }
        let number = payouts[this.destination][this.fromCity];
        let string = number.replace('.',',').replace(/$/,'0');
        return string;
      } else if (this.destination && this.homeCity){
        let payouts = this.$root.$data.payouts;
        if (typeof payouts[this.destination] === 'undefined' || typeof payouts[this.destination][this.homeCity] === 'undefined'){
          return 'n/a';
        }
        let number = payouts[this.destination][this.homeCity];
        let string = number.replace('.',',').replace(/$/,'0');
        return string;
      } else {
        return 'n/a';
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    pickDestination: function(value){
      if (value && this.destination){
        this.$store.commit('updatePlayer', {
          id        : this.player.id,
          propName  : 'fromCity',
          propValue : this.destination
        });
      }
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

<style lang="scss" scoped>
.destinationPicker {
  display: inline-block;
  float: right;
}

.destination {
  display: inline-block;
  color: #fd0;
  min-width: 130px;
}

.payout {
  color: #191;
  font-weight: bold;
  display: inline-block;
  min-width: 75px;
  text-align: right;
}
</style>

