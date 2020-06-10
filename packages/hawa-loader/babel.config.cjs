/* eslint-env node */
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                loose: true,
                // targets: {
                //     browsers: ['ie >= 9']
                // }
            }
        ]
    ],
    plugins: [
        // ["@babel/plugin-transform-runtime",
        //     {
        //         "regenerator": true
        //     }
        // ],
        ['@babel/plugin-transform-object-assign'],
        ['@babel/plugin-transform-modules-commonjs', {
            "allowTopLevelThis": true,
            "loose": true,
        }],
        // ["add-module-exports"],
        ['@babel/plugin-proposal-object-rest-spread', { 'loose': true }]
    ],
}
