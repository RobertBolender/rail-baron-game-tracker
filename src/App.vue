<template>
  <div id="app">
    <PlayerBoard></PlayerBoard>
  </div>
</template>

<script>
import PlayerBoard from './PlayerBoard.vue';

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    PlayerBoard
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #333;
  font-family: 'Source Code Pro', monospace;
  text-align: center;
}

h1, h2 {
  font-weight: normal;
}

button {
  background: #666;
  border: none;
  color: #fff;
  &:hover {
    background-color: #ddd;
    color: #000;
  }
}

select {
  background: #666;
  border: none;
  color: #fff;
}
</style>

