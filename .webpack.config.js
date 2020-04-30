const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const root_dir = process.cwd();
const webpackHotDevClient = join(root_dir, "node_modules", "react-dev-utils", "webpackHotDevClient.js");
module.exports = config => {
    console.log('NODE_ENV: ', process.env.NODE_ENV);
    config.entry = {
        main: [
            join(root_dir, "src", "index.js")
        ],
        app1: [
            join(root_dir, "src", "app1.js")
        ]
    };

    for (let i in config.plugins) {
        const plugin = config.plugins[i];
        if (plugin.options && plugin.options.inject) {
            plugin.options.chunks = ["main"];
            for (let i in Object.keys(config.entry)) {
                const key = Object.keys(config.entry)[i];
                if (key !== "main") {
                    config.plugins.push(new HtmlWebpackPlugin({
                        ...config.plugins[i].options,
                        chunks: [key],
                        filename: key + ".html",
                        template: join(root_dir, "public", key + ".html")
                    }))
                }
            }
        }
    }


    if (process.env.NODE_ENV === 'production') {
        config.output.publicPath = "./";
    } else {
        for (let i in Object.keys(config.entry)) {
            const key = Object.keys(config.entry)[i];
            config.entry[key].unshift(webpackHotDevClient)
        }
    }
    config.output.filename = "static/js/[name].bundle.js";
    config.output.chunkFilename = "static/js/[name].chunk.js";
    config.output.path = join(root_dir, "build");
    console.log(config.entry)
    console.log(config.output)
    //console.log(config)
    return config;
}
/**
 HtmlWebpackPlugin {
    options:
     { template: '/Users/barry/data/projects/react-lte/public/index.html',
       templateContent: false,
       templateParameters: [Function: templateParametersGenerator],
       filename: 'index.html',
       hash: false,
       inject: true,
       compile: true,
       favicon: false,
       minify: false,
       cache: true,
       showErrors: true,
       chunks: 'all',
       excludeChunks: [],
       chunksSortMode: 'auto',
       meta: {},
       title: 'Webpack App',
       xhtml: false },
    childCompilerHash: undefined,
    childCompilationOutputName: undefined,
    assetJson: undefined,
    hash: undefined,
    version: 4 },
 */