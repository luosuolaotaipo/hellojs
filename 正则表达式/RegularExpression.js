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

/**
 * 【元字符】
 .	匹配除换行符以外的任意字符
\w	匹配字母或数字或下划线或汉字
\s	匹配任意的空白符
\d	匹配数字
\b	匹配单词的开始或结束
^	匹配字符串的开始
$	匹配字符串结束
 */

 /**
  * 【反义元字符】
\W	匹配任意不是字母，数字，下划线，汉字的字符
\S	匹配任意不是空白符的字符
\D	匹配任意非数字的字符
\B	匹配不是单词开头或结束的位置
[^x]	匹配除了x以外的任意字符
[^aeiou]	匹配除了aeiou这几个字母以外的任意字符
  */
console.log('=======元字符======')
console.log('  匹配有abc开头的字符串')
regx=/\babc/;
console.log(regx.exec('abc 123 sss'));
regx=/^abc/
console.log(regx.exec('abc 123 sss'));

console.log('  匹配8位数字的QQ号码')
regx=/^\d\d\d\d\d\d\d\d$/;
console.log(regx.exec('12345678'));
console.log(regx.exec('123456789'));

console.log(' 匹配1开头11位数字的手机号码：')
regx=/^1\d\d\d\d\d\d\d\d\d\d\d/;
console.log(regx.exec('12345678901'));

/**
 * 【重复限定符】
*	重复零次或更多次
+	重复一次或更多次
?	重复零次或一次
{n}	重复n次
{n,}	重复n次或更多次
{n,m}	重复n到m次
 * 
 */

console.log('======重复限定符=======')
console.log('  匹配8位数字的QQ号码')
regx=/^\d{8}$/;
console.log(regx.exec('12345678'));
console.log('  匹配1开头11位数字的手机号码：')
regx=/^1\d{10}$/;
console.log(regx.exec('12345678901'));
console.log('  匹配银行卡号是14~18位的数字：');
regx=/^\d{14,18}$/;
console.log(regx.exec('1234567890123456'));
console.log('   匹配以a开头的，0个或多个b结尾的字符串');
regx=/^ab*$/;//注意ab当中的事情
console.log(regx.exec('acbbb'));
console.log(regx.exec('abbb'));

/**
 * 【分组】
 * ()中的内容作为一个整体
 */
console.log('======分组:限定符作用他左边最近的一个字符->一组表达======');
regx=/^(ab)*/;
console.log(regx.exec('abc'))
console.log(regx.exec('acab'))

/**
 * 【转义】
 * \来转义关键词、元字符、限定符
 */
console.log('=====转义：转义限定符关键字元字符====');
regx=/^\(ab\)/;
console.log(regx.exec('(ab)'))
regx=/\./;
console.log(regx.exec('a.b'));
/**
 * 【条件或|】
 */
console.log('=======条件或：|========');
console.log('以 130/131/132/155号段开头的手机号')
regx=/^(130|131|132|155)\d{8}$/
console.log(regx.exec('13115672234'));

/**
 * 【区间】
 * []来表示
 限定 0 到 9 可以写成 [0-9]
 限定 A-Z 写成 [A-Z]
 限定某些数字 [165]
 * 
 */
console.log('=====区间[]=====');
regx=/^(13[0-3]|155)\d{8}$/;
console.log(regx.exec('13335672234'));

/**
 * 【零宽断言】
 * 在指定的内容的前面或后面会出现满足指定规则的内容
 * 零宽：就是没有宽度，在正则中，断言只是匹配位置，不占字符，也就是说，匹配结果里是不会返回断言本身。
 */
console.log('======零宽断言=====');
var assertMsg='<span class="read-count">阅读数：641</span>';
/**
 * 【正向先行断言（正前瞻）】
 * 语法：（?=pattern）
 */
// regx=/?=<\/span>/;//error: Nothing to repeat
console.log('1、正向先行断言（正前瞻）:(?=pattern)')
regx=/.*(?=<\/span>)/;
console.log(regx.exec(assertMsg));//'<span class="read-count">阅读数：641'
regx=/\d(?=<\/span>)/;
console.log(regx.exec(assertMsg));//1
regx=/\d*(?=<\/span>)/;
console.log(regx.exec(assertMsg));//641

/**
 * 【正向后行断言（正后顾）】
 * 语法：（?<=pattern）
 */
// console.log('2、正向后行断言（正后顾）语法：（?<=pattern）')
// regx=/(?<=(<span class="read-count">阅读数：))\d+/
// console.log(regx.exec(assertMsg));//641

/**
 * 【负向先行断言（负前瞻）】
 * 语法：(?!pattern)
 * 作用：匹配非 pattern 表达式的前面内容，不返回本身
 */
//“我爱祖国，我是祖国的花朵”.现在要找到不是'的花朵'前面的祖国
console.log('3、负向先行断言（负前瞻）：(?!pattern)')
regx=/(祖国)(?!(的花朵))/;
assertMsg = "我爱祖国，我是祖国的花朵"
console.log(regx.exec(assertMsg));

/**
 * 负向后行断言（负后顾）
 * 语法：(?<!pattern)
 * 作用：匹配非 pattern 表达式的后面内容，不返回本身。
 */
console.log('!!!4、负向后行断言（负后顾）语法：(?<!pattern)')
// regx=/(?<!我爱)祖国/;
// console.log(regx.exec(assertMsg));

/**
 * 【捕获和非捕获】
 */
console.log('=======【捕获非捕获】返回一个捕获组=======');
console.log('1、数字编号捕获组(exp)');
var phone='020-85653333';
regx=/(0\d{2})-(\d{8})/;
console.log(regx.exec(phone));
/**
 * [ '020-85653333',  '020',  '85653333',  index: 0,  input: '020-85653333' ]]
 */
var phone2='020-022-85653333';
console.log(regx.exec(phone2));
//[ '022-85653333', '022',  '85653333',  index: 4,  input: '020-022-85653333' ]
console.log('!!!2、命名编号捕获组(?<name>exp)');
// regx=/(?<quhao>0\\d{2})-(?<haoma>\\d{8})/;
// console.log(regx.exec(phone));
console.log('3、不需要捕获的分组语法：(?:exp)');
regx=/(?:0\d{2})-(\d{8})/;
console.log(regx.exec(phone));

/**
 * 【反向引用】
 * 捕获组匹配子表达式后的内容按序号或者命名保存起来以便使用
 * 数字编号组反向引用：\k 或\number 
 * 命名编号组反向引用：\k 或者\'name'
 */
console.log('======!!!反向引用=======')
//一串字母"aabbbbgbddesddfiid"里成对的字母。
var characters = "aabbbbgbddesddfiid";
regx=/(\w)\1/;
console.log(regx.exec(characters))

/**
 * 【贪婪非贪婪】
 */
console.log('=======贪婪=====');
test2 = "61762828 176 2991 871";
regx=/(\d{3,6})/;
console.log(regx.exec(test2))//617628，本来能匹配617就好的，但是匹配到了6位
//多个贪婪在一起时，如果字符串能满足他们各自最大程度的匹配时，就互不干扰，
//但如果不能满足时，会根据深度优先原则，也就是 从 左 到 右 的每一个贪婪量词，优先最大数量的满足，
//剩余再分配下一个量词匹配
regx=/(\d{1,2})(\d{3,4})/;
console.log(regx.exec(test2));//匹配到了61 7628
test2="123 1234 12345"
console.log(regx.exec(test2));//匹配到了1 234
/**
 *
*?	重复任意次，但尽可能少重复
+?	重复1次或更多次，但尽可能少重复
??	重复0次或1次，但尽可能少重复
{n,m}?	重复n到m次，但尽可能少重复
{n,}?	重复n次以上，但尽可能少重复
*/
console.log('======懒惰 贪婪量词后面加个“？”=======')
test2="12345 123"
regx=/(\d{1,2}?)(\d{3,4}?)/;
console.log(regx.exec(test2));//匹配到了1 234
regx=/(\d{1,2})(\d{3,4})/;
console.log(regx.exec(test2));//匹配到了12 345
