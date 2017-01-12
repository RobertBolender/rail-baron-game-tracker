<template>
  <div id="PlayerBoard">
    <h1>Rail Baron Information</h1>
    <span class="time">{{timenow}}</span>
    <ul>
      <li v-for="player in players">
        <Player :player="player"></Player>
      </li>
    </ul>
  </div>
</template>

<script>
import Player from './Player.vue';
import moment from 'moment';

export default {
  name: 'PlayerBoard',
  data () {
    return {
      timenow: 'now'
    };
  },
  computed: {
    players: function(){
      return this.$store.state.players;
    }
  },
  methods: {
    time() {
      this.timenow = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
  },
  mounted() {
    this.interval = setInterval(this.time, 1000)
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

