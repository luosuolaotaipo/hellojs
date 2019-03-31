const path = require('path');
module.exports={
    mode:'development',
    entry:{
        main:'./src/main',
        news:'./src/news'
    },
    output:{
        path:path.resolve(__dirname,'dest'),
        filename:'[name]_bundle.js'
    }
}