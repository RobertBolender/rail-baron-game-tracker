<template>
  <div>
    <button @click="changeCity(getRandomCity())" class="cityRandomPicker">Roll</button>
    <select :value="value" @change="changeCity($event.target.value)" class="cityPicker">
      <option v-for="option in options" :value="option">
        {{option}}
      </option>
    </select>
  </div>
</template>

<script>
import { mapProperties } from './bobx';
import { getOddOrEven, roll2d6 } from './dice';

export default {
  name: 'CityPicker',
  props: ['player', 'value'],
  computed: {},
  data () {
    return {
      options: Object.keys(this.$root.$data.payouts)
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
      return newRegion;
    },
    getRandomCity: function () {
      var oddOrEven = getOddOrEven() === 'odd' ? 'odds' : 'evens';
      var cityRoll = roll2d6();
      var newRegion = this.getRandomRegion();
      var newCity = this.$root.$data[oddOrEven][cityRoll][newRegion];
      return newCity;
    }
  }
}
</script>

<style lang="scss" scoped>
.cityPicker {
  display: inline-block;
}
</style>

