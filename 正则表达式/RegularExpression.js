var test1="abc123def";
regx=/\bab/;
console.log(regx.exec(test1));//=>23


var test2 = "abc123def";
var patt1 = /[0-9]+/;//[0-9]数字，+号1个或等多个
console.log(test2.match(patt1));//=>123
regx=/[0-9]/;
console.log(regx.exec(test2));//=>1
regx=/^[0-9]/;//^起始位置
console.log(regx.exec(test2));//=>null
console.log("===========");
regx=/\bab/;//\b:单词的开头或结尾，也就是单词的分界处
console.log(regx.exec(test2));//=>ab
regx=/\bab\b.*\bdef\b/
console.log(regx.exec(test2));//=>null
regx=/^[a-z]/;
console.log(regx.exec(test2));//=>a
regx=/def$/;//$结束位置
console.log(regx.exec(test2));//=>def
regx=/^a*f$/;//???
console.log(regx.exec(test2));//=>f
regx=/23/;
console.log(regx.exec(test2));//=>23


