<template>
  <div class="homePicker">
    <div v-show="homeCity">
      <button @click="pickHome('')">&times;</button>
      Home: {{homeCity}}
    </div>
    <CityPicker v-if="!homeCity" :player="player" :value="homeCity" v-on:input="pickHome" />
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
    return {}
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

<style lang="scss" scoped>
.homePicker {
  display: inline-block;
}
</style>

