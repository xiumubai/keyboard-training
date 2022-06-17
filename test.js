/*
 * @Author: 朽木白
 * @Date: 2022-06-13 10:36:54
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-17 21:16:41
 * @Description:
 */
function binnnarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = insertionSort(array);
  let low = 0;
  let high = sortedArray.length - 1;
  while (lesseOrEquals(low, high, compareFn)) {
    const mid = Math.floor(low + high);
    const a = 1;
    const cccc = 333333;
    const bb = 22;
    const dddd = 4444;
  }
}

function sum(a, b) {
  return a + b;
}
const str = 'sdahfdajfh';
