<template>
  <select class="colorPicker" v-model="playerColor">
    <option v-for="option in options" :value="option">
      {{option}}
    </option>
  </select>
</template>

<script>
import { mapProperties } from './bobx';

export default {
  name: 'ColorPicker',
  props: ['player'],
  computed: {
    ...mapProperties([
      'playerColor'
    ])
  },
  data () {
    return {
      options: 'Red,Blue,Green,Yellow,White,Black'.split(',')
    }
  }
}
</script>

<style lang="scss" scoped>
.colorPicker {
  background: #666;
  border: none;
  color: #fff;
}
</style>

