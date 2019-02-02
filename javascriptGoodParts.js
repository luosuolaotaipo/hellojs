console.log(1e2 - 100);//指数计算

console.log('===========NaN & Infinity============');
var testNaN = 0 / 0;
var testInfinity = 1 / 0;
console.log(testNaN); //NaN
console.log(isNaN(testNaN));//true
console.log(testInfinity);//Infinty
console.log(isNaN(testInfinity));//false
console.log(testNaN === testNaN);//false

console.log('===========字符串=============');
console.log('\u0041');//A
console.log('hello'.length)//5
console.log('hello'.toUpperCase());//HELLO

console.log('==============表达式 statement===============');
function testField() {
    var funVariety = 1;
}
console.log(typeof funVariety);//undefined
console.log('===============switch===================')
var caseVar = 1;
var caseSubVar =2;
for (var i = 0; i < 3; i++) {
    switch (i) {
        case 0:
            console.log('case 0');
            break;
        case caseVar:
            console.log('case var');
        default:
            console.log('case default');

    }
}
console.log("=============try,throw,catch==============");
try{
    var a=0;
    do{
        console.log(a);
        a++;
        if(a %5 ==2){
            throw('error occurs');

        }
    }while(a<10)
}catch(err){console.log(err)}

var funwithThrow = function(){
    do{
        console.log(a);
        a++;
        if(a %5 ==2){
            throw('error occurs');
    
        }
    }while(a<10)    
}
try{
    funwithThrow();
}catch(err){
    console.log('functionwithThrow:'+err);
}
console.log("=========break=========");
//
console.log("============检索==============");
var pax={firstName:"a",lastName:'c'};
var middle = pax.middleName ||"(none)";
console.log(middle);//(none)
console.log("=============更新：替换 or 拓展 ===========");
console.log(pax);
pax.firstName = 'A';
pax.age = '10';
console.log(pax);
console.log("=============引用===========")
var a =10;
var b =a;
a=11;
console.log('a:'+a,'b:',b);
var arr1 = [1,2,3];
var arr2 = arr1;
arr1.push(4);
console.log(arr2);
arr1 = [5,6];
console.log(arr1,arr2);
console.log("================原型==============")
if(typeof Object.beget!=='function'){
    Object.beget = function(o){
        var F = function(){};
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.beget(pax);
another_stooge['firstName']='Harry';
console.log('原型：');console.log(pax);
console.log('链接出来的对象：');console.log(another_stooge);
console.log('链接出来的对象中没有,通过委托可以找到的age：'+another_stooge.age);//10,从原型对象中找属性，这个过程称为委托，只有在检索时才会被用到
console.log('=====================3.6#反射==============')
console.log(typeof another_stooge.firstName);
console.log(typeof another_stooge.age);
console.log(another_stooge.hasOwnProperty('age'));
console.log(pax.hasOwnProperty('age'));
console.log(another_stooge.hasOwnProperty('constructor'));
console.log(Object.constructor);
console.log('========3.7#枚举==for(item in object)======');
var propertyItem;
for(propertyItem in another_stooge){
    console.log(another_stooge[propertyItem]);//出现顺序不确定
}
var i;
var properties=['lastName','firstName','age','constructor']
for(i=0;i<properties.length;i++){
    console.log(another_stooge[properties[i]]);
}
    
console.log("==========4#函数字面量==========")
var add =  function addFun(a,b){
    return a+b;
}
console.log("===========4#函数字面量-闭包???===========");
var father = function(){
    var fatherVar = 0
    var child = function(a){
        return fatherVar+a;
    }
}
// console.log(father.child(1));
console.log("===========4#调用-方法调用(函数作为对象的属性)==============");
var myOject={
    value:0,
    increment:function(inc){
        this.value += typeof inc ==='number'?inc:1;
    }
}
myOject.increment(2);
console.log(myOject.value);
console.log("============4#调用-函数调用=================");
var value = 233;
myOject['double']=function(){
    var helper = function(){
        this.value = add(this.value,this.value);
        console.log(this.value);//NaN，此时this指代global
    }
    helper();//函数的形式调用helper
}
myOject.double();
console.log(myOject.value);//value还是2
//解决：用that
myOject['double2']=function(){
    var that  = this;
    var helper = function(){
        that.value = add(that.value,that.value);
    }
    helper();
}
myOject.double2();
console.log(myOject.value);//value=4

console.log('=========4#构造器调用=========')
var Quo = function(string){
    this.status = string;
}
Quo.prototype.get_status = function(){
    return this.status;
}

//用new调用函数，函数的this被绑定到调用该函数的对象上
var myQuo = new Quo("confused");
console.log(myQuo.status);
console.log(myQuo.get_status);
console.log(myQuo.get_status());

console.log('=========4#apply调用==========')

console.log('===========4#异常========');
var addWithException =  function(a,b){
    if(typeof a !== 'number' || typeof b !=='number'){
        throw{
            name: 'TypeError',
            message: 'Type should be number'
        }// exception对象应该包含：1.name识别异常类型 2.和message描述
    }
}
function tryException(){
    try{
        addWithException('a');
    }catch(e){
        console.log(e);
    }
}
tryException();

console.log('============4#扩充类型=============');
Function.prototype.method = function(name,func){
    this.prototype[name]=func;
    return this;
}

console.log('========TODO: 递归=========');
console.log('======作用域=======');
var foo = function(){
    var a = 3, b = 7;
    var boo = function(){
        var b=5, c = 11;
        a += b+c;
        console.log('a:'+a,'b:'+b,'c:'+c);
    }
    boo();
    console.log('a:'+a,'b:'+b);
}
foo();
var myQuo2 = new Quo('statusArgu');
myQuo2.status;
myQuo2.outter(223);

var myObject  = function(){
    var value = 1212;
    return{
        increment:function(inc){
            value += typeof inc === 'number'?inc:1;
        },
        getValue:function(){
            return value
        }
    }
}();//这个括号表示立刻调用，没有很好理解
myObject.increment(2);
console.log(myObject.getValue());

var QuoClosure = function(num){
    console.log(num);
    return{
        get_status:function(){
            return ++num;
        }
    }
}
var closureRes1 = QuoClosure(3);
// console.log(closureRes1);
var closureRes2 = closureRes1.get_status()//仍然能访问到传进来的参数
console.log(closureRes2);

console.log('=======4.12模块======')
//私有映射表
String.myMethod('deentityify',function(){
    var entity={
        quot:'"',
        lt:'<',
        gt:'>'
    };//这个映射表只有deentityify方法可以访问，此函数私有，但是可以为这个函数所用
    return function(){
        return this.replace(/&([^&;]+);/g,function(a,b){
            var r = entity[b];
            return typeof r === 'string'?r:a;
        });
    };
}());
console.log('&lt;&quot;&gt;'.deentityify());//<"">如果上一行没有用调用运算符（）的话，返回的就是一个function对象
//序列号不重复生成,单例
var seq_maker = function(){
    var prefix = '';
    var seq = 0;
    return {
        setPrefix:function(p){
            prefix = p;
        },
        setSeq: function(s){
            seq = s;
        },
        genSeq: function(){
            return prefix + seq++;
        }
    }
}
var mySeq = seq_maker();
mySeq.setPrefix('Q');
mySeq.setSeq(1000);
var mySeqSeri = mySeq.genSeq();
console.log(mySeqSeri);//Q1000
console.log(mySeq.genSeq());//Q1001
//记忆 fibonacci
var memoizer = function(memo,fundamental){
    var shell = function(n){
        var result = memo[n];
        if(typeof result !== 'number'){
            result = fundamental(shell,n);
            memo[n]=result;
        }else{
            return result;
        }
    }
    return shell;
}
var fibonacci = memoizer([0,1],function(shell,n){
    return shell(n-1)+shell(n-2);
})
var fibResult  = fibonacci(3);
console.log(fibResult);

console.log('=======4.14套用========');
var testarr = [1,2,3];
console.log(testarr.concat(['a','n']));
// Function.myMethod('curry',function(){
//     var args = arguments, that =  this;
//     return function(){
//         return that.apply(null,args.concat(arguments))
//          //args.concat is not a function
//     }
// });
Function.myMethod('curry',function(){
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments),that=this;
    return function(){
        return that.apply(null,args.concat(slice.apply(arguments)));
    }
})
var addl = add.curry('7');
console.log(addl(1));
console.log('=========伪类=========');
//1.构造一个对象
var Mammal = function(name){
    this.name = name;
}
Mammal.prototype.getName = function(){
    return this.name;
}
Mammal.prototype.says = function(){
    return this.saying || '';
}
//2.cat 对象像伪类继承Mammal
var Cat = function(name){
    this.name = name+name;
    this.saying = 'Meow';
}
Cat.prototype = new Mammal();
Cat.prototype.purr = function(n){
    var i, s = '';
    for(i=0;i<n;i++){
        if(s){
            s += '-';
        }
        s += 'r'
    }
    return s;
}
var myCat = new Cat('Kitty');
console.log(myCat.getName());
console.log(myCat.says());
console.log(myCat.purr(3));

console.log('=======5.3原型=========')
// var myCatTwo = Object.beget(Mammal);
var MammalTwo = {
    name: 'herb the mammal',
    getName: function(){
        return this.name;
    },
    says:function(){
        return this.saying || ''
    }
}
var myCatTwo = Object.beget(MammalTwo);
myCatTwo.name = 'Garfield';
myCatTwo.saying = 'miao';
myCat.getName = function(){
    return this.name+this.name;
};
console.log(myCatTwo.getName())//???
console.log(MammalTwo.getName()) 

console.log('=======6.5数组=======');
var arr = [1,2,4];
var isArray = function(val){
    return val 
        && typeof val === 'object'
        && typeof val.length === 'number'
        && typeof val.splice === 'function'
        && !(value.propertyIsEnumerable('length'));
}
console.log(isArray(arr));
var fakeArr = {
    '1':1,
    '2':2,
    '3':4
}
console.log(isArray(fakeArr))

console.log('=======7 正则======');
var url = 'http://www.ora.com:80/goodparts?q#fragment';
var parseUrl = /^(?:([a-z]+):)/
//匹配http开头： ^开头,?:exp 非捕获型分组,[a-z]a-z区间;+重复一次或多次
console.log(parseUrl.exec(url))

//匹配斜杠/
parseUrl = /(\/{0,3})/
console.log(parseUrl.exec(url));

//匹配主机域名
parseUrl = /^(?:([a-z]+):)(\/{0,3})([0-9.\-A-Za-z]+)/
//由一个或多个数字,点.,短划线-（此处转义），字母构成
console.log(parseUrl.exec(url));

//匹配端口
// parseUrl =/(\:\d+)/
parseUrl =/(?::\d+)/
console.log(parseUrl.exec(url));
parseUrl = /^(?:([a-z]+):)(\/{2})([0-9.\-A-Za-z]+)(?::(\d+))/
console.log(parseUrl.exec(url));
//匹配除？和#开头的字符
parseUrl = /([^?#]*)/
console.log(parseUrl.exec(url));
parseUrl = /^([a-z]+:)(\/{0,3})([0-9A-Z.a-z\-]+)(:\d+)(\/[^?#]*)/
console.log(parseUrl.exec(url));
//匹配?开头且有0个或多个非#字符
parseUrl = /\?([^#]*)/
console.log(parseUrl.exec(url));
parseUrl = /^(?:([a-z]+):)?(\/{0,3})([A-Za-z0-9.\-]+)(?::(\d+))(?:\/([^?#]*))?(?:\?([^#]*)(?:#(.*)))$/
console.log(parseUrl.exec(url));

/**
 * /exp/g 全局
 * /exp/i 大小写不敏感
 * /exp/m 多行，^和$能匹配结束符
 *  */

//  var newParsUrl = new RegExp("(/{0,3})");
//  console.log(newParsUrl.exec(url));
