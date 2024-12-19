const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            test:/\.vue$/, //파일명이 .vue로 끝나느 파일 (정규표현식)
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: 'app.js', //name에 자동으로 app이 들어감.
        path: path.join(__dirname, 'dist'), //경로 알아서 합쳐줌 (현재 파일 안에 있는 dist파일)
    },
};