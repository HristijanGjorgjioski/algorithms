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

const bin_search = (haystack: number[], needle: number): boolean => {
  let lo = 0;
  let hi = haystack.length; // Set high boundary to array length

  do {
    const m = Math.floor(lo + (hi - lo) / 2); // Find the middle index
    const v = haystack[m]; // Get the middle value

    if (v === needle) {
      return true; // Found the target value
    } else if (v > needle) {
      hi = m; // Search the left half
    } else {
      lo = m + 1; // Search the right half
    }
  } while (lo < hi);

  return false; // Target value not found
};

// Example test case
console.log(bin_search([1, 2, 3, 4, 5, 6, 7, 8], 9)); // Output: false
