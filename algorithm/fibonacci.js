// 斐波那契数列数列 1,1,2,3,5,8,13...
// 求斐波那契数列的第n项

// let count = 0
// function fn (n) {
// 	count ++ 
// 	if (n === 1 || n === 2) {
// 		return 1
// 	}
// 	return fn(n-1) + fn(n-2)
// }

// console.log(fn(20))
// console.log(count)

// 优化
let count = 0;
function fn2(n) {
    let cache = {};
    function _fn2(n) {
        if (cache[n]) {
            return cache[n];
        }
        count++;
        if (n == 1 || n == 2) {
            return 1;
        }
        let prev = _fn2(n - 1);
        cache[n - 1] = prev;
        let next = _fn2(n - 2);
        cache[n - 2] = next;
        return prev + next;
    }
    
    return _fn2(n);
}

console.log(fn2(12))
