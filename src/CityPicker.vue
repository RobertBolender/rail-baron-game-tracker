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
      options: 'Seattle,Portland,Sacramento,Austin,New York'.split(',')
    }
  },
  methods: {
    changeCity: function (value) {
      this.$emit('input', value);
    }
  }
}
</script>

<style scoped>
</style>

