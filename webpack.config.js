var path = require('path');

module.exports = {
    entry : 'index.jsx',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js',
    },
    module : {
        rules : [
            {test : /\.(jsx)$/, use:'babel-loader'},
            {test : /\.sass$/, use:['style-loader','css-loader','sass-loader']}
        ]
    },
    mode:'development',
    devServer: {
        historyApiFallback: true,
    }
};