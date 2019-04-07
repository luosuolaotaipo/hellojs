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
            // {test:/\.css$/,use:['style-loader','css-loader']}//普通引入css文件
            
            // {test:/\.css$/,use:['style-loader','css-loader','postcss-loader']}//在引入css前先添加前缀;写法1
            // {test:/\.css$/,use:['style-loader','css-loader',
            //     {
            //         loader:'postcss-loader'
            //     }
            // ]}//在引入css前先添加前缀;写法2
            //写法1 = 写法2

            {test:/\.css$/,use:[
                {loader:'style-loader'},
                {loader:'css-loader'},
                {
                    loader:'postcss-loader',
                    options:{
                        plugins:[
                            require('autoprefixer')
                        ]
                    }
                }
            ]}

        ]
    }
}