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
