<template>
  <div class="homePicker">
    <div v-show="homeCity">
      <button @click="pickHome('')">&times;</button>
      Home: <span class="homeCity">{{home}}</span>
    </div>
    <CityPicker
      v-if="!homeCity"
      @input="pickHome"
      :player="player"
      />
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
    ]),
    home: function() {
      return this.homeCity ? this.homeCity.replace(/_/g,' ') : '';
    }
  },
  data () {
    return {}
  },
  methods: {
    pickHome: function(value){
      if (!value.city){
        this.$store.commit('updatePlayer', {
          id         : this.player.id,
          propName   : 'fromCity',
          propValue  : ''
        });
        this.$store.commit('updatePlayer', {
          id         : this.player.id,
          propName   : 'fromRegion',
          propValue  : ''
        });
        this.$store.commit('updatePlayer', {
          id         : this.player.id,
          propName   : 'destinationCity',
          propValue  : ''
        });
        this.$store.commit('updatePlayer', {
          id         : this.player.id,
          propName   : 'destinationRegion',
          propValue  : ''
        });
      }
      this.$store.commit('updatePlayer', {
        id         : this.player.id,
        propName   : 'homeCity',
        propValue  : value.city ? value.city : ''
      });
      this.$store.commit('updatePlayer', {
        id         : this.player.id,
        propName   : 'fromCity',
        propValue  : value.city ? value.city : ''
      });
      this.$store.commit('updatePlayer', {
        id         : this.player.id,
        propName   : 'fromRegion',
        propValue  : value.region ? value.region : ''
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
  min-width: 225px;
}
</style>

