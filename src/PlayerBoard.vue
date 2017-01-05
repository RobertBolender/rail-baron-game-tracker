<template>
  <div id="PlayerBoard">
    <input name="playerlist" v-model="playerlist">
    <ul>
      <li v-for="player in players">
        <Player :name="player"></Player>
      </li>
    </ul>
  </div>
</template>

<script>
import Player from './Player.vue';

export default {
  name: 'PlayerBoard',
  data () {
    return {
      msg: 'PlayerBoard',
      playerlist: 'Bob,Elvira,Ted,Charleen,Carol'
    }
  },
  computed: {
    players: function(){
      return this.playerlist.split(',');
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
    padding: 100px 0;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    display: flex;
    margin: 5px;
  }
}
</style>

