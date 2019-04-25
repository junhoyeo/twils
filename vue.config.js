let themeName = 'white';

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/themes/${themeName}.scss";
        `
      }
    }
  }
};
