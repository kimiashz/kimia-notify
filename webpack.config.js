var path = require('path');

module.exports = {
    entry : '/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'commonjs'
    },
    module : {
        rules : [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {test : /\.sass$/, use:['style-loader','css-loader','sass-loader']}
        ]
    },
    resolve: {
        modules: ['node_modules', path.join(__dirname, 'src'), 'assets'],
    },
    externals: {
        "react": {
            "commonjs": "react",
            "commonjs2": "react",
            "amd": "react",
            "root": "React"
        },
        "react-dom": {
            "commonjs": "react-dom",
            "commonjs2": "react-dom",
            "amd": "react-dom",
            "root": "ReactDOM"
        }
    },
    mode:'development'
};