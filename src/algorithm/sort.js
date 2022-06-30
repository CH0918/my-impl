// 冒泡排序  从小到大
let times = 0;
function bubbleSort(arr) {
  // 外层循环控制趟数
  const len = arr.length;
  // 假设当前趟已经排好序了
  let isSored = true;
  for (let i = 0; i < len - 1; i++) {
    // 内层循环控制当前趟比较的次数
    for (let j = 0; j < len - 1 - i; j++) {
      times++;
      // 两两比较，发现前一个比后一个大则交换
      if (arr[j] > arr[j + 1]) {
        isSored = false;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (isSored) break;
  }
  return arr;
}

// 选择排序 从小到大
function selectSort(arr) {}

const arr = [2, 3, 4, 8, 9];
console.log(bubbleSort(arr));
console.log(`比较次数：${times}`);
