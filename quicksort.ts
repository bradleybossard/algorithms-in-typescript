export function quickSort(array: number[]): number[] {
  array = array.slice();
  partition(array, 0, array.length);
  return array;
}

function partition(array: number[], start:number, before:number): void {
  const length = before - start;
  if (length <= 1) return;  // Recursive terminating condition

  const pivotIndex  = start + Math.floor(Math.random() * length);
  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

  const pivot = array[start];
  let pivotRank = start;

  for (let i = start + 1; i < before; i++) {
    if (array[i] < pivot) {
      pivotRank++;
      [array[i], array[pivotRank]] = [array[pivotRank], array[i]]; 
    }
  }

  if (pivotRank !== start) {
    [array[pivotRank], array[start]] = [array[start], array[pivotRank]]; 
  }

  partition(array, start, pivotRank);
  partition(array, pivotRank + 1, before); 
}

const arraySize = 100;
const array = Array.from({ length: arraySize }, function() {
  return Math.floor(Math.random() * arraySize);
});
console.time("quickSort");
const sorted = quickSort(array);
console.timeEnd("quickSort");
console.log(array.join(","));
console.log();
console.log(sorted.join(","));
