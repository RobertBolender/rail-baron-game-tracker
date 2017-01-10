<template>
  <div class="colorPicker">
    <select v-model="playerColor">
      <option v-for="option in options" :value="option">
        {{option}}
      </option>
    </select>
  </div>
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

<style scoped>
</style>

