const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    main: path.resolve(__dirname, './js/main.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { modules: false }]
              ],
              'plugins': [
                ["@babel/transform-runtime"]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-import',
                  'tailwindcss/nesting',
                  'tailwindcss',
                  [
                    "postcss-preset-env",
                    {features: {'nesting-rules': false}},
                  ],
                  'autoprefixer'
                ],
              },
            },
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'url-loader',
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  devServer: {
    static: 'dist',
    watchContentBase: true,
  },
};
