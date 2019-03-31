const path = require('path');
module.exports={
    mode:'development',
    entry:'./src/index',
    output:{
        path:path.resolve(__dirname,'dest'),
        filename:'bundle.main.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    }
}