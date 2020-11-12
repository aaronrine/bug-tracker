const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    webpack: (config, env) => {
        config.plugins.push(
            new BundleTracker({
                path: __dirname,
                filename: './webpack-stats.json'
            })
        );

        config.optimization.runtimeChunk = false;
        config.optimization.splitChunks = {
            cacheGroups: {
                default: false
            }
        };

        return config;
    }
};
