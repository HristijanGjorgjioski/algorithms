/**
 * Bubble Sort Algorithm
 *
 * Description:
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements, and swaps them if they are in the wrong order.
 * This process repeats until the array is fully sorted.
 *
 * Time Complexity:
 * - Best Case: O(n) (when the array is already sorted)
 * - Average Case: O(n^2)
 * - Worst Case: O(n^2) (when the array is sorted in reverse order)
 *
 * Space Complexity:
 * - O(1) (in-place sorting, no extra space used)
 *
 * Stability:
 * - Stable (preserves the relative order of equal elements)
 *
 * @param arr - An array of numbers to be sorted
 * @returns The sorted array
 */
const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr; // Returning the sorted array
};

// Example usage
console.log(bubbleSort([1, 3, 7, 4, 2, 11, 1, 15]));
