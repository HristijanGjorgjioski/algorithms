/**
 * Problem: Binary Search Algorithm
 * -----------------------------------
 * Given a sorted array `haystack` and a target number `needle`,
 * this function determines whether `needle` exists in the array.
 * It follows the classic binary search approach, reducing the search space
 * by half in each iteration, achieving O(log n) time complexity.
 *
 * Approach:
 * - Initialize two pointers: `lo` (start) and `hi` (end of the array).
 * - Compute the middle index and compare its value with `needle`.
 * - If the middle value equals `needle`, return true.
 * - If the middle value is greater than `needle`, search the left half.
 * - If the middle value is less than `needle`, search the right half.
 * - Repeat the process until `lo` meets `hi`.
 * - If `needle` is not found, return false.
 */

export function bin_search(arr: number[], target: number): boolean {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    const mid = Math.floor(lo + (hi - lo) / 2);
    if (arr[mid] === target) {
      return true;
    }
    if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
}

// Example test case
console.log(bin_search([1, 2, 3, 4, 5, 6, 7, 8], 9)); // Output: false
