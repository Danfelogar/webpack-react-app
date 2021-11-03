const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ruleForStyles  = {
    test: /\.css$/,
    use:['style-loader', 'css-loader']//style-loader entendera el css y lo cargara en la pag y el css-loader resolvera los import y requerimientos que haga en el css
}

const ruleForJavaScript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options:{
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic' //classic: babel cuando detecte que necesite react no va a buscar import React from 'react'; sino que lo auto importa
                }
            ]
        ]
    }
};

const rules = [
    ruleForJavaScript,
    ruleForStyles
];

module.exports= (env, argv) => {

    const { mode } = argv;
    const isProduction = mode === 'production';

    return{
        // entry: './src/index.js',
        output: {//este es el path donde deberia de poner el output
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'build')
        },
        plugins:[
            new HtmlWebpackPlugin({ template: 'src/index.html' })
        ],
        module: {
            rules
        },
        devServer: {
            open: true, //abrimos el navegador
            port: 3001,
            // overlay: true, //abrir un overlay con los errores //me lanzo error al usarlo
            compress: true,
        },
        devtool: 'source-map',//ayuda para debugs para verlo de forma limpia pero asi como es util es pesado de mover en el pc
    }
}