function bubbleSort(array: number[]): number[] {
  array = array.slice();
  while(true) {
    let swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

const arraySize = 100;
const array = Array.from({length: arraySize}, () => Math.floor(Math.random() * arraySize));
console.time('bubbleSort');
const sorted = bubbleSort(array);
console.timeEnd('bubbleSort');
console.log(array.join(','));
console.log()
console.log(sorted.join(','));
