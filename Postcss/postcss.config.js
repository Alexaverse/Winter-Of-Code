const cssnano = require('cssnano');
const hey = require('postcss-preset-env');
// const hello = require('postcss-modules');

module.exports = {
    plugins: [
        cssnano({
            preset: "default",
        }),
        hey({
            stage:1
        }),
        // hello({
        //     preset:"default",
        // })

    ],
};
