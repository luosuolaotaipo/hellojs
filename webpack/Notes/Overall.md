## 模块系统

### JS模块系统演化
1. CMD(Common Module Definition)
2. AMD(Asynchronous Module Definition):可以异步加载模块
3. 语言提供官方的模块支持

### 使用ES6模块
+ 定义模块
```
// module.js
export let moduleA = 'hello';
exprot let moduleB = 'world';
```
  + 导出export
  ```
  export let a = 12;
  export const b = 12;
  export {a,b};
  export function show(){//...};
  export class Person{}
  ```
   默认成员
  ```
  export default 99 
  export default function a(){} 
  export default let a = 123;
  ```

+ 引用模块
```
// index.js
import * as mod from './module.js';
// 在nodejs中./表示从当前路径开始找，如果省略了./,表示从node_modules中找对应模块  
// 亦可写作：import * as mod from './module', .js可以省略  
// *为es6语法，目前chrome,ff都不支持:Uncaught SyntaxError: Unexpected token *  
console.log(mod.moduleA+''+mod.moduleB);
```
```
import * as mod from 'XXX'; // 从XXX引入所有模块
import {a, b as name2} from 'XXX'; // 从XXX引入a,b。并把b命名为name2
import mod from 'XXX'; // 导入XXX的default模块
import 'XXX'; //只引入,例如资源文件
let p = import('./module.js'); //p是一个promise

```
+ webpack 编译配置
  + module.exports={}为CMD模型，NodeJs支持CMD模型
  + mode:模式。设置process.env.NODE_ENV,node环境变量
    + none 不优化
    + development 输出调试信息，
    + production 最高优化，启用压缩，忽略错误
  + entry:入口，从一个或者多个js开始编译，用到即编译进去
    + 单入口--适用于SPA(单页应用)
    + 多入口--适用于MPA(多页应用)
  + output:出口,将打包后的文件放置在path下(绝对路径),并以filename命名  
    ```
    {
      path://绝对路径，可以用path.resolve()
      filename://文件名
    }
    ```


## Webpack

### 常用功能
* 压缩
* 打包:一堆文件=>一个文件，方便引入
* 多种文件得编译: less=>css; import(es6); es6=>es5,es4
* 脚手架:搭一个项目框架
* 生成:生成production版本

### 安装
npm i -g webpack
npm i -g webpack-cli


### loader
让webpack能处理非js或非JSON以外的数据
！记得打包入口能够到目标文件

* npm i style-loader css-loader

* webpack.config.js中的配置
```
module.exports={
  ...,
  entry,
  output,
  module:{
    rules:[
      // 配置loader
      
      // 单loader
      {test:/\.css$/i,use:'css-loader'},

      // 多loader,从后往前读。将css-loader处理好的结果给style-loader,最后给webpack
      {test:/\.css$/i,use:['style-loader','css-loader']},
    ]
  }
}
```

* css-loader
读取css,包装成js字符串

* style-loader
能将字符串输出到style标签中

### plugin
* postcss-loader
给css加浏览器前缀
1. postcss.config.js文件
```
const autoprefixer = require('autoprefixer')
module.exports={
    plugins:[
        autoprefixer
    ]
}
```
2.作为options用在loader上
```
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
```
* autoprefixer
看浏览器占有率(>5%),则会把这个css兼容选项加上
配置
1. .browserslistrc
```
> 1%
last 5 version
```
用户量大于1%，最后五个版本
2. package.json中
```
browserslist:[
  "last 5 version",
  "> 1%"
]
```

* file-loader

## npx
和npm差不多，区别在不是包管理。而是执行包
* 查看autoprefixer的信息：``npx autoprefixer --info``