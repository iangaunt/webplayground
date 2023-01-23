/* eslint-disable no-undef */
const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = await import('html-webpack-plugin');
const MiniCssExtractPlugin = await import('mini-css-extract-plugin');

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: './src/scripts/index.tsx',
    output: {
        path: __dirname + '/public/',
    },
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
                },
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    devtool: prod ? undefined : 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/pages/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};
