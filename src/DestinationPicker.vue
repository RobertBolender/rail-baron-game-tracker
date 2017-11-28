<template>
  <div class="destinationPicker">
    <template v-if="destination">
      To: <span class="destination">{{destination}}</span>
      For: <span class="payout" v-if="payout">${{payout}}</span>
      <button @click="pickDestination('')">&times;</button>
    </template>
    <CityPicker
      v-on:input="pickDestination"
      :player="player"
      />
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
      'destinationCity',
      'destinationRegion',
      'fromCity',
      'fromRegion',
      'homeCity'
    ]),
    destination: function(){
      return this.destinationCity ? this.destinationCity.replace(/_/g,' ') : '';
    },
    payout: function(){
      if (this.destinationCity && this.fromCity){
        let payouts = this.$root.$data.payouts;
        if (typeof payouts[this.destinationCity] === 'undefined' || typeof payouts[this.destinationCity][this.fromCity] === 'undefined'){
          return 'n/a';
        }
        let number = payouts[this.destinationCity][this.fromCity];
        let string = number.replace('.',',').replace(/$/,'0');
        return string;
      } else if (this.destinationCity && this.homeCity){
        let payouts = this.$root.$data.payouts;
        if (typeof payouts[this.destinationCity] === 'undefined' || typeof payouts[this.destinationCity][this.homeCity] === 'undefined'){
          return 'n/a';
        }
        let number = payouts[this.destinationCity][this.homeCity];
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
      if (value.city && this.destinationCity){
        this.$store.commit('updatePlayer', {
          id        : this.player.id,
          propName  : 'fromCity',
          propValue : this.destinationCity
        });
        this.$store.commit('updatePlayer', {
          id        : this.player.id,
          propName  : 'fromRegion',
          propValue : this.destinationRegion
        });
      }
      this.$store.commit('updatePlayer', {
        id         : this.player.id,
        propName   : 'destinationCity',
        propValue  : value.city ? value.city : ''
      });
      this.$store.commit('updatePlayer', {
        id         : this.player.id,
        propName   : 'destinationRegion',
        propValue  : value.region ? value.region : ''
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

