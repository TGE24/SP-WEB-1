/* eslint-disable */
const withCss = require("@zeit/next-css");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

module.exports = withCss({
  env: {
    baseURL: "https://spreadprolimited.com/api",
    paystackKey: "pk_test_cc5a16f36a9c190775dcc8eeefeeeddd3b209d46",
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    );
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader",
      });
    }
    return config;
  },
});
