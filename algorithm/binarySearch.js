// 二分查找： 通常是一个有序数组，先找到中间的值，将查找的目标元素和中间的值比较，如果比中间的值大，从中间元素的后面元素中查找，如果比中间要小，从中间元素的左边去查找 (针对递增数组)

function binarySearch (target, arr) {
	let start = 0
	let end = arr[i].length - 1

	while (start <= end) {
		let mid = parseInt(start + (end - start) / 2)
		if (target === arr[mid]) {
			return mid
		} else if (target > midValue) {
			start = mid + 1
		} else {
			end = mid - 1
		}
	}
	return -1
}