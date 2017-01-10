<template>
  <div class="homePicker">
    <CityPicker :player="player" :value="homeCity" v-on:input="pickHome" />
  </div>
</template>

<script>
import { mapProperties } from './bobx';
import CityPicker from './CityPicker.vue';

export default {
  name: 'HomePicker',
  props: ['player'],
  computed: {
    ...mapProperties([
      'homeCity'
    ])
  },
  data () {
    return {
      options: 'Seattle,Portland,Sacramento,Austin,New York'.split(',')
    }
  },
  methods: {
    pickHome: function(value){
      this.$store.commit('updatePlayer', {
        id         : this.player.id,
        propName   : 'homeCity',
        propValue  : value
      });
    }
  },
  components: {
    CityPicker
  }
}
</script>

<style scoped>
</style>

