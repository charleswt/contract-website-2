const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/scripts/index.js",
    nav: "./src/scripts/nav.js",
    sub: "./src/scripts/sub.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "robots.txt", to: "robots.txt" }],
    }),
    new HtmlWebpackPlugin({
      title: "index",
      template: "src/views/index.html",
      filename: "index.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      title: "coloringAndDyes",
      template: "src/views/coloringAndDyes.html",
      filename: "coloringAndDyes.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      title: "detanglers",
      template: "src/views/detanglers.html",
      filename: "detanglers.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      title: "hairRemoval",
      template: "src/views/hairRemoval.html",
      filename: "hairRemoval.html",
      minify: true,
    }),
    new HtmlWebpackPlugin({
      title: "hairSpray",
      template: "src/views/hairSpray.html",
      filename: "hairSpray.html",
      minify: true,
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/metadata.html"),
      location: "head",
      template_filename: [
        "index.html",
        "coloringAndDyes.html",
        "detanglers.html",
        "hairRemoval.html",
        "hairSpray.html",
      ],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/footer.html"),
      location: "footerall",
      template_filename: [
        "index.html",
        "coloringAndDyes.html",
        "detanglers.html",
        "hairRemoval.html",
        "hairSpray.html",
      ],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/navigation.html"),
      location: "header",
      template_filename: [
        "index.html",
        "coloringAndDyes.html",
        "detanglers.html",
        "hairRemoval.html",
        "hairSpray.html",
      ],
    }),
    new InjectManifest({
      swSrc: "./src-sw.js",
      swDest: "./src-sw.js",
    }),

    new WebpackPwaManifest({
      fingerprints: false,
      inject: true,
      name: "THE DAILY HAIROSCOPE",
      short_name: "TDH",
      description: "",
      background_color: "#333",
      theme_color: "#fff",
      start_url: "./",
      publicPath: "./",
      icons: [
        {
          src: path.resolve("assets/images/logo.png"),
          sizes: [110, 144],
          destination: path.join("assets", "images"),
        },
        {
          src: path.resolve("assets/images/logo.webp"),
          sizes: [512],
          destination: path.join("assets", "images"),
        },
        {
          src: path.resolve("assets/images/hamburger.webp"),
          sizes: [60],
          destination: path.join("assets", "images"),
        },
        {
          src: path.resolve("assets/images/logo.ico"),
          sizes: [64],
          destination: path.join("assets", "images"),
        },
        {
          src: "assets/images/logo.webp",
          sizes: "196x196",
          type: "image/webp",
          purpose: "maskable",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/transform-runtime",
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:6].[ext]",
              outputPath: "images",
              publicPath: "images",
              emitFile: true,
              esModule: false,
            },
          },
          {
            loader: "webp-loader",
          },
        ],
      },
    ],
  },
};