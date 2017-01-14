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
      this.timenow = moment().format('MMMM Do YYYY, h:mm a'); //:ss
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
  color: #fd0;
  padding-top: 1.5em;

  h1 {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }

  input { width: 100%; }

  ul {
    list-style-type: none;
    padding: 0;
    max-width: 750px;
    margin: auto;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    display: flex;
    width: 100%;
    margin: 5px;
  }
}
</style>

