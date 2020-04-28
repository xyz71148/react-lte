let target = "http://0.0.0.0:8080";
module.exports = [require.resolve('./.webpack.config.js'), {
    devServer: config => {
        config.proxy = {
            // "/api": {
            //     target,
            //     changeOrigin: true,
            // }
        }
        return config
    }
},]
