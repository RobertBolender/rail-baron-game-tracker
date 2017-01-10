function mapProperties(properties) {
  return properties.reduce((obj = {}, prop) => {
    obj[prop] = {
      get () {
        return this.player[prop];
      },
      set (value) {
        this.$store.commit('updatePlayer', {
          id         : this.player.id,
          propName   : prop,
          propValue  : value
        });
      }
    };
    return obj;
  }, {});
}

export {
  mapProperties
};

