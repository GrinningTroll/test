var path = require("path");
module.exports = {
    entry: "./src/index.js", ///Ваш исходный файл
    output: {
        path: path.resolve(__dirname, "output"),
        
        filename: "bundle.js", ///Ваш финальный файл
    },
    mode: "development", /// Отключить минификацию
    watch: true,
    module:{
        rules:[
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    devtool: "source-map"

}