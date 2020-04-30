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
},
    [
        'use-eslint-config',
        {
            extends: ['react-app'],
            plugins: [],
            "env": {
                "browser": true,
                "commonjs": true,
                "es6": true,
                "jquery": true
            },
            "globals": {
                "jQuery": true,
                "Chart": true,
                "moment":true,
                "Sparkline":true,
                "Swal":true,
                "toastr":true
            },
            "rules": {
                "jsx-a11y/anchor-is-valid": "off",
                "jsx-a11y/img-redundant-alt": "off",
                "jsx-a11y/alt-text": "off",
                "jsx-a11y/aria-props":"off",
                "jsx-a11y/anchor-has-content":"off"
            }
        },
    ],]
