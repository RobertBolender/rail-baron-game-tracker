<template>
  <select :class="classObject" v-model="playerColor">
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
    classObject: function(){
      return {
        colorPicker: true,
        [this.playerColor]: true
      }
    },
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
  [value=Red],
  .Red {
    background: #f00;
  }
  [value=Blue],
  .Blue {
    background: #00f;
  }
  [value=Green],
  .Green {
    background: #0f0;
  }
  [value=Yellow],
  .Yellow {
    background: #ff0;
  }
  [value=White],
  .White {
    background: #fff;
  }
  [value=Black],
  .Black {
    background: #000;
  }

  .Red,
  .Blue,
  .Green,
  .Yellow,
  .White,
  .Black {
    color: transparent;
  }
  option:hover {
    background-color: inherit;
  }
</style>

