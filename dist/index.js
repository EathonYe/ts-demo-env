"use strict";
// ============ 七种JS中的数据类型 ======================
var a = 1;
var b = true;
var c = 'str';
var d = null;
var e = undefined;
var f = Symbol('description');
var obj = {};
// =====================================
var arr = [1, 2, 3]; // 类型数组
var tuple = [1, '1']; // 元组
var Gender;
(function (Gender) {
    Gender["Man"] = "man";
    Gender["Woman"] = "woman";
})(Gender || (Gender = {}));
var man = Gender.Man;
function fn(str) {
    console.log(str);
}
// const g: number = fn() // error
// ! 指定了strictNullChecks后，null和undefined只能赋值给void和自身
// const g: number = null // error
// const h: number = undefined // error
console.log(a, b, c, d, e, f);
console.log(obj, arr, tuple);
console.log(man);
