function mapProperties(properties) {
  let ret = properties.reduce(function (obj = {}, prop) {
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
  return ret;
}

export {
  mapProperties
};

