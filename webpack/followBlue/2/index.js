import * as mod from './module';
import obj from './defaultObj';
import defaultFun from './defaultFun';

console.log(mod);
console.log(mod.moduleA+' '+mod.moduleB);
console.log(JSON.stringify(obj));
console.log('fun:'+defaultFun);
defaultFun();