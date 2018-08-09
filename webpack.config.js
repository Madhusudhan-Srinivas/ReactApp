var config = {
    mode: 'development',
    entry: './main.js',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 5001
    },
    module: {
        rules: [           
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react', 'stage-0']
             }
          }
       ]
    }
 }
 module.exports = config;