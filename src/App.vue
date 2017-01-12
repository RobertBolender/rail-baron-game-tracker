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
* { box-sizing: border-box; }
body {
  margin: 0;
  background-color: #333;
  font-family: 'Source Code Pro', monospace;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
