/*******************************华丽的分隔符**********************************/
//语句
/*以下是JavaScritp语句的两个示例。字符//后面的语句是注释，他们是程序中的说明性备注*/
var aBrid = 'RoBin';//给变量aBrid赋值文本'RoBin'
var today = new Date;//给变量today赋值为今天的日期
/*******************************华丽的分隔符**********************************/
//函数
function inchestometers(inches) {
    if (inches < 0) {
        return -1;
    } else {
        var meters = inches / 39.37;
        return meters;
    }
}
var inches = 12;
var meters = inchestometers(inches);
console.log(meters);
/*******************************华丽的分隔符**********************************/
//注释
/*
* 建议将所有的注释编写为单行注释块。
* */
//这是一个注释的例子
var extendedIdea = aGoodIdea + "You never know when you'll have to figure out what it does";
/*******************************华丽的分隔符**********************************/
//赋值和等号
// = 赋值
// == 等于
