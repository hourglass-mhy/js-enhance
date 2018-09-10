var arr = [10, 9, 2, 3, 100, 5, 4,2]

function bubbleSort (arr) {
	// 外层循环控制跑的趟数
	for (let i = 0; i < arr.length - 1; i++) {
		let sortOK = true // 标记某一趟是否排序好
		// 内层循环控制比较的次数
		for ( let j = 0; j < arr.length -1 -i; j++ ) {
			if (arr[j] > arr[j+1]) {
				sortOK = false  // 只有有交换就说明没有排序好
				let temp = arr[j];
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
		if (sortOK) { // 某一趟已经排序好
 			break //进行下一次循环
		}
	}
	return arr
}