module.exports = {
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};