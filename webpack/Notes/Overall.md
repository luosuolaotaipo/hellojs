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
  + mode:模式
  + entry:入口，从一个或者多个js开始编译，用到即编译进去
  + output:出口,将打包后的文件放置在path下(绝对路径),并以filename命名

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

```flow
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End:>http://www.google.com
op1=>operation: get_hotel_ids|past
op2=>operation: get_proxy|current
sub1=>subroutine: get_proxy|current
op3=>operation: save_comment|current
op4=>operation: set_sentiment|current
op5=>operation: set_record|current

cond1=>condition: ids_remain空?
cond2=>condition: proxy_list空?
cond3=>condition: ids_got空?
cond4=>condition: 爬取成功??
cond5=>condition: ids_remain空?

io1=>inputoutput: ids-remain
io2=>inputoutput: proxy_list
io3=>inputoutput: ids-got

st->op1(right)->io1->cond1
cond1(yes)->sub1->io2->cond2
cond2(no)->op3
cond2(yes)->sub1
cond1(no)->op3->cond4
cond4(yes)->io3->cond3
cond4(no)->io1
cond3(no)->op4
cond3(yes, right)->cond5
cond5(yes)->op5
cond5(no)->cond3
op5->e