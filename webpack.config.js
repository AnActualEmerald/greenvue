module.exports = {
 
    module: {
        // rules: [
        //     {
        //         test: /\.wasm$/,
        //         type: "asset/inline",
        //     },
        // ],
        experiments: {
            syncWebAssembly: true
        },
    }
}