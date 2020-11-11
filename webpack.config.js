const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public', 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader:'babel-loader'
        },
        {
            test: /\.s?css$/,
            use: [MiniCssExtractPlugin.loader, 
                {
                    loader: 'css-loader',
                    options:{
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options:{
                        sourceMap: true
                    }
                },
                ]
            
        }
    ]
    },
    plugins: [new MiniCssExtractPlugin()],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
     },
}
