const path = require('path')
module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            },
        ]
    }
}
