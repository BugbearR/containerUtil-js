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
        "transform-es2015-modules-umd"
    ],
    sourceMaps: true,
    env: {
        production: {
            presets: [
                [
                    "minify"
                ]
            ]
        }
    }
};
