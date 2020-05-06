const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root_dir = process.cwd();
const webpackHotDevClient = join(root_dir, "node_modules", "react-dev-utils", "webpackHotDevClient.js");

module.exports = config => {
    console.log('NODE_ENV: ', process.env.NODE_ENV);
    config.entry = {
        index: [
            join(root_dir, "src", "index.js")
        ],
        gcp: [
            join(root_dir, "src", "apps","gcp","index.js")
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
    config.resolve.alias = {
        "lib":join(root_dir,"src","lib"),
        "store":join(root_dir,"src","store"),
        "components":join(root_dir,"src","components"),
        "apps":join(root_dir,"src","apps"),
        "pages":join(root_dir,"src","pages"),
        "style":join(root_dir,"src","style")
    }
    return config;
}
