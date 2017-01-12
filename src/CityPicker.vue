<template>
  <select :value="value" @change="changeCity($event.target.value)" class="cityPicker">
    <option v-for="option in options" :value="option">
      {{option}}
    </option>
  </select>
</template>

<script>
import { mapProperties } from './bobx';

export default {
  name: 'CityPicker',
  props: ['player', 'value'],
  computed: {},
  data () {
    return {
      options: Object.keys(this.$store.state.payouts)
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

