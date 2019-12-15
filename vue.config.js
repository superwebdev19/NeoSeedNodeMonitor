module.exports = {
  configureWebpack: {
    // other webpack options to merge in ...
  },
  // devServer option don't belong into `configureWebpack`
  devServer: {
    port: 4200,
    // public: "0.0.0.0:4200",
    disableHostCheck: true
  }
};
