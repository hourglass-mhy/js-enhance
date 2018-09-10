// 正则表达式相关算法
// 查找字符串中出现次数为1的第一个字符
function find (str) {
	for (let i = 0; i < str.length; i++) {
		let char = str[i]
		let reg = new RegExp(char, 'g')

		let len = str.match(reg).length // str.match(reg) 按照指定的正则全局搜索
		if (len === 1) {
			return char
		}
	} 
}

let str1= 'abafadfb'
console.log(find(str1))



var str = 'google';
var reg = /o/g;
console.log(reg.test(str))
console.log(reg.test(str))
console.log(reg.test(str))


console.log(reg.test(str), reg.lastIndex)
console.log(reg.test(str), reg.lastIndex)
console.log(reg.test(str), reg.lastIndex)
