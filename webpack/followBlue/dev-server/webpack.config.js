const path=require('path');
module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dest'),
        filename:'bundle'
    }
}