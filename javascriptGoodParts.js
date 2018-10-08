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

console.log('=========4#构造器调用 new一个函数对象=========')
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
var array = [3,4];

function selfadd(a){
    return this+a;
}
var sum = add.apply(null,[3,4])
var sum2 = selfadd.apply(1,[5]);
console.log('sum:'+sum,'sum2:'+sum2);
var statusObject = {
    answer:'OK'
};
var statusResult = Quo.prototype.get_status.apply(statusObject);
console.log(statusResult);
statusObject.status = 'OK';
statusResult = Quo.prototype.get_status.apply(statusObject);
//相当于statusObject.get_status(),get_status()里的this就指向statusObject
//而没有status的statusObject就返回undefined了
console.log(statusResult);
console.log("======4.4#参数 arguments不是一个数组但有length=====");

var argFun = function(){
    var i, sum =0;
    for(i=0;i<arguments.length;i++){
        sum += arguments[i];
        console.log(arguments[i]);
    }
    return sum;
}
console.log(argFun(1,2,3,4));

console.log('===========4.7#给类型增加方法==========');
Function.prototype.myMethod = function(name,func){
    this.prototype[name]=func;
    return this;
}
Number.myMethod('integer',function(){
    return Math[this<0?'ceiling':'floor'](this);//integer方法给Number类型取整
});
console.log(3.5.integer());//3.5这个number调用Number的方法：integer
String.myMethod('trim',function(){
    return this.replace(/^\s+|\s+$/g,'');
})
console.log('hello '.trim()+'world');

console.log('============4.8递归==============');
//汉诺塔
function hanoi(disc,src,aux,dst){
    if(disc>0){
        hanoi(disc-1,src,dst,aux);
        console.log('Move disc '+ disc+' from '+src+' to '+dst);
        hanoi(disc-1,aux,src,dst);
    }
}
hanoi(5,'Src','Aux','Dst');
//遍历树节点

console.log('============4.9作用域==============');
var scope = function(){
    var a=3,b=5;
    var scopeInner = function(){
        var b =7, c=11;
        a += b+c;
        console.log('socpeInner: a: '+a,'b: '+b,'c: '+c);//a=21, b=7,c=11;
    };
    scopeInner();
    console.log('Outside of scopeInner: a: '+a,'b: '+b);
};
scope();

console.log('============4.10 闭包============');
//内部函数不能访问外部的this和argunments
Quo.prototype.outter = function(argus){
    
    console.log(argus);
    var inner = function(){
        console.log('inner status:'+ this.status); //undefined=>不能访问this
        console.log('inner arguments:', argus++);
    }
    inner();
    console.log('outter status:'+ this.status);//statusArgu 传入的status
}
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