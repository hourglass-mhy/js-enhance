// 快速排序：任意找一个基准点，一般是中间的值为比较的基础，比基准值小的放在left，比基准值大的放在右边，递归比较左右两边
let count = 0
function quickSort (arr) {
	if (arr.length <= 1) {
		return arr
	}
	count++
	let midIndex = Math.floor(arr.length / 2)
	let midValue = arr.splice(midIndex, 1)[0] // splice 返回删除的元素组成的数据，这里保存中间的元素

	// 以基准值为中心，进行比较
	let left = []
	let right = []
	for (let i = 0; i < arr. length; i++) {
		if (arr[i] < midValue) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat([midValue], quickSort(right))
}
let arr = [2,5,4,1,7,3,8,6,9,0]
console.log(quickSort(arr))
console.log(count)
