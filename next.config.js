const withSass = require('@zeit/next-sass');
const tailwindCss = require('tailwindcss');
require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = withSass({
  target: 'serverless',
  webpack(config) {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    const rules = [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [tailwindCss('./tailwind.config.js')],
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ];

    return {
      ...config,
      module: { ...config.module, rules: [...config.module.rules, ...rules] },
    };
  },
});
