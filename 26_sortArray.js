function sortAarray(arr) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] > arr[j]) {
  //         [arr[i], arr[j]] = [arr[j], arr[i]];
  //       }
  //     }
  //   }
  //   return arr;

  return arr.sort((a, b) => a - b);
  // a	b	a - b	Action
  // 5	2	3       Swap (5 ↔ 2)
  // 2	8	-6	    No change
  // 8	1	7	    Swap (8 ↔ 1)
  //   Rule Explanation:
  //   ✅ Negative (-) Value வந்தால் → a முன்னால் இருக்கும் (Swap இல்லை ❌)
  //   ✅ Positive (+) Value வந்தால் → b முன்னால் வரும் (Swap Happens ✅)

  //   📌 இது a - b & b - a இரண்டிலும் ஒரே விதி.
  //   🔹 a - b → Ascending (சிறியது முதல் பெரியது வரை)
  //   🔹 b - a → Descending (பெரியது முதல் சிறியது வரை)
}

console.log("Original array" + [5, 2, 8, 1]);

console.log(sortAarray([5, 2, 8, 1]));
