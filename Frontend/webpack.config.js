const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.html', '.txt'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../Backend/VideoGameLover/src/main/resources/static'),
    }, 
};
