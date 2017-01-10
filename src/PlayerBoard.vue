<template>
  <div id="PlayerBoard">
    <ul>
      <li v-for="player in players">
        <Player :player="player"></Player>
      </li>
    </ul>
  </div>
</template>

<script>
import Player from './Player.vue';

export default {
  name: 'PlayerBoard',
  data () {
    return {};
  },
  computed: {
    players: function(){
      return this.$store.state.players;
    }
  },
  components: {
    Player
  }
}
</script>

<style lang="scss" scoped>
#PlayerBoard {
  background-color: #eee;
  input { width: 100%; }
  ul {
    max-width: 630px;;
    margin: auto;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    display: flex;
    margin: 5px;
  }
}
</style>

