module.exports = {
    entry: "./components/routes.jsx",
    output: {
        path: './static',
        filename: "bundle.js",
    },
    module: {
        loaders: 
        [
            {test: /\.jsx$/, loader: "babel-loader", exclude: "./node_modules"},
            {test: /\.js$/, loader: "babel-loader", exclude: "./node_modules"},
        ]
    }
}