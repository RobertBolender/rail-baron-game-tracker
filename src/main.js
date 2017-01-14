import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    updatePlayer (state, payload) {
      state.players[payload.id][payload.propName] = payload.propValue;
    },
    addPlayer (state) {
      state.players.push( { id: state.players.length, playerName: 'Player ' + state.players.length } );
    }
  },
  plugins: [createPersistedState()]
});

if (store.state.players.length == 0){
  for (var i = 0; i < 6; i++){
    store.commit('addPlayer');
  }
}

const payouts = require('./data/payouts.json');
const odds    = require('./data/odd_destinations.json');
const evens   = require('./data/even_destinations.json');

var root = new Vue({
  el: '#app',
  store,
  render: h => h(App),
  data: function(){
    return {
      payouts : payouts,
      odds    : odds,
      evens   : evens
    }
  }
})

