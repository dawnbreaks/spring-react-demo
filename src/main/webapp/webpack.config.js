module.exports = {
    entry: './name-manager.jsx',
    output: {
        filename: './site/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx/,
                loader: 'babel?presets[]=react,presets[]=es2015'
            }
        ]
    },
    devtool: '#source-map'
}
