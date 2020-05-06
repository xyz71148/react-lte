const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root_dir = process.cwd();
const src_dir = join(root_dir,"src");
const src_index_dir = join(src_dir,"index.js");
const src_app_dir = join(src_dir,"app","index.js");
const apps_dir = join(src_dir,"apps");
const get_app_path = (app)=>[join(apps_dir,app,"index.js")]
const webpackHotDevClient = join(root_dir, "node_modules", "react-dev-utils", "webpackHotDevClient.js");

module.exports = config => {
    console.log('NODE_ENV: ', process.env.NODE_ENV);
    config.entry = {
        index:  [src_index_dir],
        app:    [src_app_dir],
        simple: get_app_path("simple"),
        gcp:    get_app_path("gcp")
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
        "lib":join(root_dir,"src","app","lib"),
        "store":join(root_dir,"src","app","store"),
        "components":join(root_dir,"src","app","components"),
        "apps":join(root_dir,"src","app","apps"),
        "pages":join(root_dir,"src","app","pages"),
        "style":join(root_dir,"src","app","style")
    }
    return config;
}
