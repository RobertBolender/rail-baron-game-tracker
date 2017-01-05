<template>
  <div class="player">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: 'player',
  props: ['name']
}
</script>

<style scoped>
.player {
  border: 1px solid #000;
  min-width: 200px;
  min-height: 200px;
  padding: 5px;
  text-align: left;
}
</style>

