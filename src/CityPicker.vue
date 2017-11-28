<template>
  <span class="cityPicker">
    <button v-show="!pickARegion" @click="getRandomRegion()" class="cityRandomPicker">Roll</button>
    <select
      v-show="pickARegion"
      @change="changeCity(getRandomCity($event.target.value))"
      class="regionPicker"
      :key="Math.random()"
      >
      <option>Pick a region</option>
      <option v-for="option in regions" :value="option" :class="destinationRegion === option ? 'current' : ''">
        {{option}}
      </option>
    </select>
  </span>
</template>

<script>
import { mapProperties } from './bobx';
import { getOddOrEven, roll2d6 } from './dice';

export default {
  name: 'CityPicker',
  props: ['player'],
  computed: {
    ...mapProperties([
      'destinationRegion',
      'pickARegion'
    ])
  },
  data () {
    return {
      options: Object.keys(this.$root.$data.payouts),
      regions: ['NorthEast','SouthEast','NorthCentral','SouthCentral','Plains','NorthWest','SouthWest']
    }
  },
  methods: {
    changeCity: function (value) {
      this.$emit('input', value);
    },
    getRandomRegion: function () {
      var oddOrEven = getOddOrEven() === 'odd' ? 'odds' : 'evens';
      var regionRoll = roll2d6();
      var newRegion = this.$root.$data[oddOrEven][regionRoll]['Region'];

      if (newRegion === this.destinationRegion){
        console.log(this.destinationRegion, newRegion);
        this.$store.commit('updatePlayer', {
          id        : this.player.id,
          propName  : 'pickARegion',
          propValue : true
        });
        return 'pick';
      } else {
        return this.changeCity(this.getRandomCity(newRegion));
      }
    },
    getRandomCity: function (region) {
      var oddOrEven = getOddOrEven() === 'odd' ? 'odds' : 'evens';
      var cityRoll = roll2d6();
      var newCity = this.$root.$data[oddOrEven][cityRoll][region];
      this.$store.commit('updatePlayer', {
        id        : this.player.id,
        propName  : 'pickARegion',
        propValue : false
      });
      return { city: newCity, region: region };
    }
  }
}
</script>

<style lang="scss" scoped>
.cityPicker {
  min-width: 100px;
  display: inline-block;
  text-align: right;
}
option.current {
  font-style: italic;
}
</style>

