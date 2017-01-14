<template>
  <select :value="value" @change="changeCity($event.target.value)" class="cityPicker">
    <option v-for="option in options" :value="option">
      {{option}}
    </option>
  </select>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.cityPicker {
  display: inline-block;
}
</style>

