function bubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      //0<4 =>0 to 3
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let arr = [5, 4, 3, 2, 1];

console.log(bubleSort(arr));
// ------------------------------------------------
// Pass	|Comparisons & Swaps|	Array After Each Pass
// ------------------------------------------------

// Pass 1 (i = 0)	(5,4) → Swap → [4, 5, 3, 2, 1]
//                  (5,3) → Swap → [4, 3, 5, 2, 1]
//                  (5,2) → Swap → [4, 3, 2, 5, 1]
//                  (5,1) → Swap → [4, 3, 2, 1, 5]	[4, 3, 2, 1, 5]
// Pass 2 (i = 1)	(4,3) → Swap → [3, 4, 2, 1, 5]
//                  (4,2) → Swap → [3, 2, 4, 1, 5]
//                  (4,1) → Swap → [3, 2, 1, 4, 5]	[3, 2, 1, 4, 5]
// Pass 3 (i = 2)	(3,2) → Swap → [2, 3, 1, 4, 5]
//                  (3,1) → Swap → [2, 1, 3, 4, 5]	[2, 1, 3, 4, 5]
// Pass 4 (i = 3)	(2,1) → Swap → [1, 2, 3, 4, 5]	[1, 2, 3, 4, 5]
// Pass 5 (i = 4)	No swaps needed (Already Sorted) ✅	[1, 2, 3, 4, 5]
