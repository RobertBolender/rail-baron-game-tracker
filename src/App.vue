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

<style>
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

</style>
