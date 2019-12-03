const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    bootstrap: "./webpack/bootstrap-entry.js",
    site: "./webpack/site.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./webpack/template.html",
      filename: "../../templates/polls/base.html",
      inject: false
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "mysite", "polls", "static", "polls"),
    publicPath: "/"
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
