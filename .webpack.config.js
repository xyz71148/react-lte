module.exports = config => {
    console.log('TARGET: ', process.env.TARGET);
    console.log('NODE_ENV: ', process.env.NODE_ENV);
    if(process.env.NODE_ENV === 'production'){
        config.output.publicPath = "./";
    }
    return config;
}
