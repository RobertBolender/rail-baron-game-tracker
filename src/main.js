import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    players: []
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    namePlayer (state, payload) {
      state.players[payload.id].playerName = payload.playerName;
    },
    addPlayer (state) {
      state.players.push( { id: state.players.length, playerName: 'Player ' + state.players.length } );
    }
  },
  plugins: [createPersistedState()]
});

if (store.state.players.length == 0){
  store.commit('addPlayer');
  store.commit('addPlayer');
  store.commit('addPlayer');
  store.commit('addPlayer');
  store.commit('addPlayer');
  store.commit('addPlayer');
}

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
