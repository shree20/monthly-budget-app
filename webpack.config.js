const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({path: '.env.test'})
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({path: '.env.developement'})
}

module.exports = {
    entry: ['@babel/polyfill','./src/index.js'],
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
    plugins: [new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
     },
}
