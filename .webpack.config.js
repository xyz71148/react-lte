module.exports = config => {
    console.log('TARGET: ', process.env.TARGET);
    console.log('NODE_ENV: ', process.env.NODE_ENV);
    return config;
}