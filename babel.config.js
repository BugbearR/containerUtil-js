module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                useBuiltIns: "usage",
                corejs: 3
            }
        ],
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-modules-umd"
    ],
    sourceMaps: true,
    env: {
        production: {
            presets: [
                [
                    "minify"
                ]
            ],
            comments: false
        }
    }
};
