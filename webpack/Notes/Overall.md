# 二、模块系统

## Jx模块系统演化
1. CMD(Common Module Definition)
2. AMD(Asynchronous Module Definition):可以异步加载模块
3. 语言提供官方的模块支持

## 使用ES6模块
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
```
+ webpack 编译配置
  + module.exports={}为CMD模型，NodeJs支持CMD模型
  + mode:模式
  + entry:入口，从一个或者多个js开始编译，用到即编译进去
  + output:出口,将打包后的文件放置在path下(绝对路径),并以filename命名

