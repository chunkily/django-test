const path = require("path");

module.exports = {
  mode: "production",
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "mysite", "polls", "static", "polls")
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader" // inject CSS to page
          },
          {
            loader: "css-loader" // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run postcss actions
            options: {
              plugins: function() {
                // postcss plugins, can be exported to postcss.config.js
                return [require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};
